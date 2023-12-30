import { ElementSlide } from '../slide/Element'
import { FC } from 'react'
import { TypesElement } from '~/model/element/elements-types'
import styles from './miniSlide.module.css'

interface MiniSlideProps {
  index?: number;
  elements?: TypesElement[];
}

export const MiniSlide: FC<MiniSlideProps> = ({
  index, elements,
}: MiniSlideProps): JSX.Element => {
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