import {
  FC,
  useState,
} from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import { ActionButton } from '../header/ActionButton'
import { IBaseSlideElement } from '~/model/project/slide/element/BaseSlideElement'
import { ISlide } from '~/model/project/slide/Slide'
import { MouseEvent } from 'react'
import { Size } from '~/model/base/Size'
import { SlideElement } from './element/Element'
import { SlideElementEnum } from '~/model/project/slide/element/SlideElementEnum'
import styles from './Slide.module.css'

interface _SlideElementsProps {
  elements: IBaseSlideElement[];

}

const _SlideElements: FC<_SlideElementsProps> = ({ elements }: _SlideElementsProps): JSX.Element => {
  const [elementsList, _setElementsList] = useState<IBaseSlideElement[]>(elements)

  const addText = () => {
    const newElement: IBaseSlideElement = {
      id: '1',
      leftTopPoint: {
        x: 0,
        y: 0,
      },
      position: {
        x: 0,
        y: 0,
      },
      rightBottomPoint: {
        x: 0,
        y: 0,
      },
      size: new Size(10,10),
      type: SlideElementEnum.Text,
    }
    _setElementsList(elementsList => [...elementsList, newElement])
  }

  const addShape = () => {
    const newElement: IBaseSlideElement = {
      color: '#ffc0cb',
      id: '1',
      leftTopPoint: {
        x: 0,
        y: 0,
      },
      position: {
        x: 0,
        y: 0,
      },
      rightBottomPoint: {
        x: 0,
        y: 0,
      },
      size: new Size(10, 10),
      type: SlideElementEnum.Circle,
    }
    _setElementsList(elementsList => [...elementsList, newElement])
  }

  const addImage = () => {
    const newElement: IBaseSlideElement = {
      id: '1',
      leftTopPoint: {
        x: 0,
        y: 0,
      },
      position: {
        x: 0,
        y: 0,
      },
      rightBottomPoint: {
        x: 0,
        y: 0,
      },
      size: new Size(10,10),
      type: SlideElementEnum.Image,
    }
    _setElementsList(elementsList => [...elementsList, newElement])
  }

  return (
    <div>
      <ActionButton
        icon={<AcUnitIcon />}
        label=""
        onClick={addText}
      />
      <ActionButton
        icon={<AcUnitIcon />}
        label=""
        onClick={addShape}
      />
      <ActionButton
        icon={<AcUnitIcon />}
        label=""
        onClick={addImage}
      />
      <div className={styles.slide}>
        {elementsList.map(el => {
          return (
            <SlideElement
              key={el.id}
              element={el}
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