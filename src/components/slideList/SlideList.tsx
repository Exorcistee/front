import { FC } from 'react'
import { MiniSlide } from './MiniSlide'
import style from './SlideList.module.css'

interface SlideListProps {}

export const SlideList: FC<SlideListProps> = (_: SlideListProps): JSX.Element => {
  return (
    <div className={style['slide-list']}>
      <MiniSlide />
      <MiniSlide />
    </div>
  )
}
