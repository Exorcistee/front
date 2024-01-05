import { FC } from 'react'
import { IBaseSlideElement } from '~/model/project/slide/element/BaseSlideElement'
import { ISlide } from '~/model/project/slide/Slide'
import { MouseEvent } from 'react'
import { SlideElement } from './element/Element'
import styles from './Slide.module.css'

interface _SlideElementsProps {
  elements: IBaseSlideElement[];
  setElements?: React.Dispatch<React.SetStateAction<IBaseSlideElement[]>>;
}

const _SlideElements: FC<_SlideElementsProps> = ({
  elements, setElements,
}: _SlideElementsProps): JSX.Element => {
  return (
    <div>
      <div className={styles.slide}>
        {elements.map(el => {
          return (
            <SlideElement
              key={el.id}
              element={el}
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              setElements={setElements ?? (() => {})}
            />
          )
        })}
      </div>
    </div>
  )
}

interface SlideProps {
  slide: ISlide;
  isPreview: boolean;
  index: number;
  onCtrlSelectSlide: (index: number) => void;
  setElements?: React.Dispatch<React.SetStateAction<IBaseSlideElement[]>>;
}

export const Slide: FC<SlideProps> = ({
  slide, isPreview, index, onCtrlSelectSlide, setElements,
}: SlideProps): JSX.Element => {
  const handleClick = (event: MouseEvent) => {
    if (event.ctrlKey || event.metaKey) {
      event.preventDefault()
    }
    if (event.ctrlKey){
      onCtrlSelectSlide(index)
    }
  }

  return (
    <div
      className={!isPreview ? styles.slide : styles['slide-preview']}
      onClick={handleClick}
    >
      {isPreview
        ? (
          <div className={styles['slide-preview-row']}>
            <span className={styles['slide-index']}>
              {index+1}
            </span>
            <div className={styles[slide.isSelected ? 'slide-miniature-selected' : 'slide-miniature']}>
              <div className={styles['slide-preview-mini']}>
                <_SlideElements
                  elements={slide.slideElements}
                  setElements={setElements}
                />
              </div>
            </div>
          </div>
        )
        : (
          <_SlideElements
            elements={slide.slideElements}
            setElements={setElements}
          />
        )
      }
    </div>
  )
}