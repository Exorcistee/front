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
  addElement: (newElement: IBaseSlideElement) => void;
}

const _SlideElements: FC<_SlideElementsProps> = ({ elements, addElement }: _SlideElementsProps): JSX.Element => {
  const [_elementsList, _setElementsList] = useState<IBaseSlideElement[]>(elements)

  addElement = (newElement: IBaseSlideElement) => {
    _setElementsList(elements => [...elements, newElement])
  }

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
}

export const Slide: FC<SlideProps> = ({
  slide, isPreview,
}: SlideProps): JSX.Element => {
  return (
    <div className={!isPreview ? styles.slide : styles['slide-preview']}>
      {isPreview
        ? (
          <div className={styles['slide-miniature']}>
            <div className={styles['slide-preview-mini']}>
              <_SlideElements
                elements={slide.slideElements}
                addElement={}
              />
            </div>
          </div>
        )
        : (
          <_SlideElements
            elements={slide.slideElements}
            addElement={}/
          >
        )
      }
    </div>
  )
}