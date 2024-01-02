import {
  deselectSlide,
  selectSlide,
} from '~/store/slideActionCreators'
import {
  useDispatch,
  useSelector,
} from 'react-redux'
import { FC } from 'react'
import { ISlide } from '~/model/project/slide/Slide'
import { RootState } from '~/store/reducer/rootReducer'
import { Slide } from '../slide/Slide'
import style from './SlideList.module.css'

interface SlideListProps {
  slideList: ISlide[];
  selectedSlides: number[];
}

export const SlideList: FC<SlideListProps> = (_: SlideListProps): JSX.Element => {
  const project = useSelector((state: RootState) => state)
  const slides = project.projectSlides.slides
  const selectedSlidesIndexes = project.projectSlides.selectedSlides
  const dispatch = useDispatch()

  const handleSelectSlide = (index: number) => {
    const isSelected = selectedSlidesIndexes.find(i => i === index) !== undefined
    isSelected ? dispatch(deselectSlide(slides[index])) : dispatch(selectSlide(slides[index]))
  }

  return (
    <div className={style['slide-list']}>
      {slides.map((slide, index) => {
        return (
          <Slide
            key={slide.id}
            isPreview
            index={index}
            isSelected={selectedSlidesIndexes.includes(index)}
            slide={slide}
            onCtrlSelectSlide={handleSelectSlide}
          />
        )
      })}
      {selectedSlidesIndexes.length > 0 && (
        <span>
          Выбранные слайды: {selectedSlidesIndexes.map((index) => index).join(', ')}
        </span>
      )}
    </div>
  )
}
