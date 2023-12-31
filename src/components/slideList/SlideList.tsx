import {
  FC,
  useEffect,
  useState,
} from 'react'
import { ActionButton } from '../header/ActionButton' //TODO: удалить, если убираем кнопки из этого модуля
import AddBoxIcon from '@mui/icons-material/AddBox' //TODO: удалить, если убираем кнопки из этого модуля
import { ISlide } from '~/model/project/slide/Slide'
import { Size } from '~/model/base/Size'
import { Slide } from '../slide/Slide'
import { Text } from '~/model/project/slide/element/Text'
import style from './SlideList.module.css'

interface SlideListProps {
  slideList: ISlide[];
}

export const SlideList: FC<SlideListProps> = (props: SlideListProps): JSX.Element => {
  // TODO: сделать state слайдов, заполнить каждый слайд текстом с id
  const [slideList, setSlideList] = useState<ISlide[]>(props.slideList)

  useEffect(() => {
    // Пример генерации текста для каждого слайда (замените на свою логику)
    const updatedSlideList = props.slideList.map(slide => ({ ...slide }))
    setSlideList(updatedSlideList)
  }, [props.slideList])

  const handleAddSlide = () => {
    // TODO: Логика добавления нового слайда
    const newSlide: ISlide = {
      background: { color: 'red' }, // TODO: Цвет сейчас не меняется, по-умолчанию ставится белый
      id: Date.now(),
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
      const updatedSlideList = [...prevSlideList]
      updatedSlideList.pop()// удаляем последний элемент
      return updatedSlideList
    })
  }

  return (
    <div className={style['slide-list']}>
      {slideList.map(slide => {
        return (
          <Slide
            key={slide.id}
            isPreview
            slide={slide}
          />
        )
      })}
      <ActionButton
      //TODO: удалить, если убираем кнопки из этого модуля
        icon={<AddBoxIcon />}
        label="Добавить"
        onClick={handleAddSlide}
      />
      <ActionButton
      //TODO: удалить, если убираем кнопки из этого модуля
        icon={<AddBoxIcon />}
        label="Удалить"
        onClick={handleDeleteSlide}
      />
    </div>
  )
}
