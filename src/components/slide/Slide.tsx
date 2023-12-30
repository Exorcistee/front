import { ElementSlide } from './Element'
import { FC } from 'react'
import styles from './Element.module.css'

interface SlideProps {}

export const Slide: FC<SlideProps> = (_: SlideProps): JSX.Element => {
  return (
    <div className={styles.Slide}>
      <ElementSlide element = "text" />
      <ElementSlide element = "shape" />
      <ElementSlide element = "image" />
    </div>
  )
}