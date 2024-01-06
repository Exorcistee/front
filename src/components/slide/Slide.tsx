import {
  FC,
  MouseEvent,
} from 'react'
import {
  deselectElement,
  removeAllElements,
  selectElement,
} from '~/store/actionsElements'
import {
  useDispatch,
  useSelector,
} from 'react-redux'
import { IBaseSlideElement } from '~/model/project/slide/element/BaseSlideElement'
import { ISlide } from '~/model/project/slide/Slide'
import { RootState } from '~/store/reducer/rootReducer'
import { SlideElement } from './element/Element'
import styles from './Slide.module.css'

interface _SlideElementsProps {
  elements: IBaseSlideElement[];
  setElements: React.Dispatch<React.SetStateAction<IBaseSlideElement[]>>;
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
              className={selectedElements.has(el.id) ? 'selected' : ''}
              element={el}
              // eslint-disable-next-line @typescript-eslint/no-empty-function
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
  setElements: React.Dispatch<React.SetStateAction<IBaseSlideElement[]>>;
  selectElements: (idElement: string) => void;
  selectedElements: string[];
}

export const Slide: FC<SlideProps> = ({
  slide, isPreview, index, onCtrlSelectSlide, setElements, selectedElements, selectElements,
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