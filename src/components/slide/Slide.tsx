import {
  FC,
  useState,
} from 'react'
import { IBaseSlideElement } from '~/model/project/slide/element/BaseSlideElement'
import { ISlide } from '~/model/project/slide/Slide'
import { SlideElement } from './element/Element'
import styles from './Slide.module.css'

interface _SlideElementsProps {
  elements: IBaseSlideElement[];
}

const _SlideElements: FC<_SlideElementsProps> = ({ elements }: _SlideElementsProps): JSX.Element => {
  const [_elementsList, _setElementsList] = useState<IBaseSlideElement[]>([])

  // _setElementsList(list => {list[0]})

  return (
    <>
      {elements.map(el => {
        return (
          <SlideElement
            key={el.id}
            element={el}
          />
        )
      })}
    </>
  )
}

interface SlideProps {
  slide: ISlide;
  isPreview: boolean;
  index: number;
}

export const Slide: FC<SlideProps> = ({
  slide, isPreview, index,
}: SlideProps): JSX.Element => {
  return (
    <div className={!isPreview ? styles.slide : styles['slide-preview']}>
      {isPreview
        ? (
          <div className={styles['slide-preview-row']}>
            <span className={styles['slide-index']}>
              {index}
            </span>
            <div className={styles['slide-miniature']}>
              <div className={styles['slide-preview-mini']}>
                <_SlideElements elements={slide.slideElements} />
              </div>
            </div>
          </div>
        )
        : (
          <_SlideElements elements={slide.slideElements} />
        )
      }
    </div>
  )
}