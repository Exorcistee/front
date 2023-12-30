import { ElementSlide } from '../slide/Element'
import { FC } from 'react'
import { TypesElement } from '~/model/element/ElementTypes'
import styles from './MiniSlide.module.css'

interface MiniSlideProps {
  index?: number;
  elements?: TypesElement[];
}

export const MiniSlide: FC<MiniSlideProps> = (_: MiniSlideProps): JSX.Element => {
  return (
    <div className={styles.slidePreview}>
      <div className={styles.slideMiniature}>
        <div className={styles.slidePreviewMini}>
          <ElementSlide element = "text" />
          <ElementSlide element = "shape" />
          <ElementSlide element = "image" />
        </div>
      </div>
    </div>
  )
}