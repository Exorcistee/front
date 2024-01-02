import {
  deselectElement,
  removeAllElements,
  selectElement,
} from '~/store/actionsElements'
import {
  useDispatch,
  useSelector,
} from 'react-redux'
import { FC } from 'react'
import { IBaseSlideElement } from '~/model/project/slide/element/BaseSlideElement'
import { ISlide } from '~/model/project/slide/Slide'
import { MouseEvent } from 'react'
import { RootState } from '~/store/reducer/rootReducer'
import { SlideElement } from './element/Element'
import styles from './Slide.module.css'

interface _SlideElementsProps {
  elements: IBaseSlideElement[];
}

const _SlideElements: FC<_SlideElementsProps> = (): JSX.Element => {
  const elementsList = useSelector((state: RootState) => state.elementReducer.elements)
  const selectedElements = useSelector((state: RootState) => state.selectedElements)
  const dispatch = useDispatch()

  const handleElementClick = (event: React.MouseEvent, elementId: string) => {
    if (event.ctrlKey) {
      if (selectedElements.has(elementId)) {
        dispatch(deselectElement(elementId))
      } else {
        dispatch(selectElement(elementId))
      }
    } else {
      dispatch(removeAllElements())
      dispatch(selectElement(elementId))
    }
  }

  return (
    <div>
      <div className={styles.slide}>
        {elementsList.map(el => {
          return (
            <SlideElement
              key={el.id}
              className={selectedElements.has(el.id) ? 'selected' : ''}
              element={el}
              onClick={(event) => {handleElementClick(event, el.id)}}
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
}

export const Slide: FC<SlideProps> = ({
  slide, isPreview, index, onCtrlSelectSlide,
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