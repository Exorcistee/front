import {
  FC,
  useEffect,
  useState,
} from 'react'
import { ActionButton } from '../header/ActionButton'
import AddBoxIcon from '@mui/icons-material/AddBox'
import { ISlide } from '~/model/project/slide/Slide'
import { Size } from '~/model/base/Size'
import { Slide } from '../slide/Slide'
import { Text } from '~/model/project/slide/element/Text'
import style from './SlideList.module.css'

interface SlideListProps {
  slideList: ISlide[];
  selectedSlides?: number[];
}

export const SlideList: FC<SlideListProps> = (props: SlideListProps): JSX.Element => {
  const [slideList, setSlideList] = useState<ISlide[]>(props.slideList)
  const [selectedSlides, setSelectedSlides] = useState<number[]>(props.selectedSlides ?? [])

  useEffect(() => {
    const updatedSlideList = props.slideList.map(slide => ({ ...slide }))
    setSlideList(updatedSlideList)
  }, [props.slideList])

  const handleSelectSlide = (index: number) => {
    setSlideList((prevSlideList) => {
      const updatedSlideList = prevSlideList.map((slide, i) => {
        return {
          ...slide,
          isSelected: i === index ? !slide.isSelected : slide.isSelected,
        }
      })
      const updatedSelectedSlides = updatedSlideList
        .filter((slide) => slide.isSelected)
        .map((slide) => slide.index)

      setSelectedSlides(updatedSelectedSlides)
      return updatedSlideList
    })
  }

  const handleAddSlide = () => {
    // TODO: Логика добавления нового слайда
    const newSlide: ISlide = {
      background: { color: 'red' }, // TODO: Цвет сейчас не меняется, по-умолчанию ставится белый
      id: Date.now(),
      index: slideList.length,
      slideElements: [
        new Text({
          color: 'black',
          family: '123214',
          size: 13,
        },
        `TextId ${Date.now()}`,
        new Size(1, 1)
        ),
      ],
    }
    setSlideList(prevSlideList => [...prevSlideList, newSlide])
  }

  const handleDeleteSlide = () => {
    // TODO: Логика удаления слайда по его ID
    setSlideList((prevSlideList) => {
      const updatedSlideList = prevSlideList.filter((_, index) => !selectedSlides.includes(index))
      const updatedSlideListWithNewIndexes = updatedSlideList.map((slide, index) => ({
        ...slide,
        index: index,
      }))

      return updatedSlideListWithNewIndexes
    })
    setSelectedSlides([])
  }

  return (
    <div className={style['slide-list']}>
      {slideList.map((slide, index) => {
        return (
          <Slide
            key={slide.id}
            isPreview
            index={index}
            slide={slide}
            onCtrlSelectSlide={handleSelectSlide}
          />
        )
      })}
      <ActionButton
        icon={<AddBoxIcon />}
        label="Добавить"
        onClick={handleAddSlide}
      />
      <ActionButton
        icon={<AddBoxIcon />}
        label="Удалить"
        onClick={handleDeleteSlide}
      />
      {selectedSlides.length > 0 && (
        <span>
        Выбранные слайды: {selectedSlides.map((index) => index + 1).join(', ')}
        </span>
      )}
    </div>
  )
}
