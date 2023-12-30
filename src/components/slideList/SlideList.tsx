import {
  FC,
  useState,
} from 'react'
import { ISlide } from '~/model/project/slide/Slide'
import { Slide } from '../slide/Slide'
import style from './SlideList.module.css'

interface SlideListProps {
  slideList: ISlide[];
}

export const SlideList: FC<SlideListProps> = (_: SlideListProps): JSX.Element => {
  // TODO: сделать state слайдов, заполнить каждый слайд текстом с id
  const [slideList, __] = useState<ISlide[]>([])

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
    </div>
  )
}
