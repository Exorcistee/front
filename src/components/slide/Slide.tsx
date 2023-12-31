import {
  FC,
  useState,
} from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import { ActionButton } from '../header/ActionButton'
import { IBaseSlideElement } from '~/model/project/slide/element/BaseSlideElement'
import { ISlide } from '~/model/project/slide/Slide'
import { Size } from '~/model/base/Size'
import { SlideElement } from './element/Element'
import { SlideElementEnum } from '~/model/project/slide/element/SlideElementEnum'
import styles from './Slide.module.css'

interface _SlideElementsProps {
  elements: IBaseSlideElement[];

}

const _SlideElements: FC<_SlideElementsProps> = ({ elements }: _SlideElementsProps): JSX.Element => {
  const [elementsList, _setElementsList] = useState<IBaseSlideElement[]>(elements)

  const addElement = () => {
    const newElement: IBaseSlideElement = {
      id: '1',
      leftTopPoint: {
        x: 10,
        y: 10,
      },
      position: {
        x: 15,
        y: 15,
      },
      rightBottomPoint: {
        x: 20,
        y: 20,
      },
      size: new Size(10,10),
      type: SlideElementEnum.Text,
    }
    _setElementsList(elementsList => [...elementsList, newElement])
  }

  return (
    <div>
      <ActionButton
        icon={<AcUnitIcon />}
        label=""
        onClick={addElement}
      />
      {elementsList.map(el => {
        return (
          <SlideElement
            key={el.id}
            element={el}
          />
        )
      })}
    </div>
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
              <_SlideElements elements={slide.slideElements} />
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