import { FC } from 'react'
import { ISlide } from '~/model/project/slide/Slide'
import { Slide } from '../slide/Slide'
import style from './SlideList.module.css'

interface SlideListProps {
  slideList: ISlide[];
  selectedSlides: number[];
  handleSelectSlide: (index: number) => void;
}

export const SlideList: FC<SlideListProps> = (props: SlideListProps): JSX.Element => {
  return (
    <div className={style['slide-list']}>
      {props.selectedSlides.length > 0 ? (
        <span>
          Выбранные слайды: {props.selectedSlides.map((index) => index + 1).join(', ')}
        </span>
      ) : (
        <span>Выбранных слайдов нет</span>
      )}
      {props.slideList.map((slide, index) => {
        return (
          <Slide
            key={slide.id}
            isPreview
            index={index}
            slide={slide}
            onCtrlSelectSlide={() => { props.handleSelectSlide(index) }}
          />
        )
      })}
    </div>
  )
}
