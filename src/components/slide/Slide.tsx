import {
  FC,
  MouseEvent,
} from 'react'
import { ISlide } from '~/model/project/slide/Slide'
import { SlideElement } from './element/Element'
import { SlideElementAll } from '../editor/Editor'
import styles from './Slide.module.css'

interface _SlideElementsProps {
  elements: SlideElementAll[];
  setElements: React.Dispatch<React.SetStateAction<SlideElementAll[]>>;
  selectElements: (idElement: string) => void;
  selectedElements: string[];
}

const _SlideElements: FC<_SlideElementsProps> = ({
  elements, setElements, selectElements, selectedElements,
}: _SlideElementsProps): JSX.Element => {
  return (
    <div>
      <div className={styles.slide}>
        {elements.map(el => {
          return (
            <SlideElement
              key={el.id}
              element={el}
              selectElements={selectElements}
              selectedElements={selectedElements}
              setElements={setElements}
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
  isSelected?: boolean;
  index: number;
  onCtrlSelectSlide: (index: number) => void;
  setElements: React.Dispatch<React.SetStateAction<SlideElementAll[]>>;
  selectElements: (idElement: string) => void;
  selectedElements: string[];
}

export const Slide: FC<SlideProps> = ({
  slide, isPreview, isSelected, index, onCtrlSelectSlide, setElements, selectedElements, selectElements,
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
            <div className={styles[isSelected ? 'slide-miniature-selected' : 'slide-miniature']}>
              <div className={styles['slide-preview-mini']}>
                <_SlideElements
                  elements={slide.slideElements}
                  selectElements={selectElements}
                  selectedElements={selectedElements}
                  setElements={setElements}
                />
              </div>
            </div>
          </div>
        )
        : (
          <_SlideElements
            elements={slide.slideElements}
            selectElements={selectElements}
            selectedElements={selectedElements}
            setElements={setElements}
          />
        )
      }
    </div>
  )
}