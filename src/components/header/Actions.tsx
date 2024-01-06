import { ActionButton } from './ActionButton'
import AddBoxIcon from '@mui/icons-material/AddBox'
import Category from '@mui/icons-material/Category'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import DeleteIcon from '@mui/icons-material/Delete'
import { FC } from 'react'
import FormatColorFill from '@mui/icons-material/FormatColorFill'
import { IBaseSlideElement } from '~/model/project/slide/element/BaseSlideElement'
import { IBaseSlideShape } from '~/model/project/slide/element/shape/BaseSlideShape'
import { IImage } from '~/model/project/slide/element/Image'
import { IText } from '~/model/project/slide/element/Text'
import InsertPhoto from '@mui/icons-material/InsertPhoto'
import { Size } from '~/model/base/Size'
import { SlideElementEnum } from '~/model/project/slide/element/SlideElementEnum'
import TextFields from '@mui/icons-material/TextFields'
import styles from './Actions.module.css'

interface ActionProps {
  handleAddSlide: () => void;
  handleDeleteSlide: () => void;
  onAddElement: (newElement: IBaseSlideElement) => void;
  deleteElement: () => void;
}

export const Actions: FC<ActionProps> = (props: ActionProps): JSX.Element => {
  const addNewTextElement = () => {
    const newElementText: IText = {
      font: {
        color: '#FFFFFF',
        family: 'Arial',
        size: 10,
      },
      id: `${Date.now().toString()}-${Math.random().toString()}`,
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
      text: 'default',
      type: SlideElementEnum.Text,
    }
    props.onAddElement(newElementText)
  }

  const addNewShapeElement = () => {
    const newElementShape: IBaseSlideShape = {
      borderColor: '#FFFFFF',
      color: '#ffc0cb',
      id: `${Date.now().toString()}-${Math.random().toString()}`,
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
    props.onAddElement(newElementShape)
  }

  const addNewImageElement = () => {
    const newElementImage: IImage = {
      id: `${Date.now().toString()}-${Math.random().toString()}`,
      imgSource: '33',
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
    props.onAddElement(newElementImage)
  }

  return (
    <div className={styles['action-bar']}>
      <div className={styles['action-main']}>
        <ActionButton
          icon={<AddBoxIcon />}
          label="Добавить слайд"
          onClick={props.handleAddSlide}
        />
        <ActionButton
          icon={<DeleteIcon />}
          label="Удалить слайд"
          onClick={props.handleDeleteSlide}
        />
      </div>
      <ActionButton
        icon={<ChevronLeftIcon />}
        label="Удалить элементы"
        onClick={props.deleteElement}
      />
      <ActionButton
        icon={<ChevronRightIcon />}
        label=""
      />
      <ActionButton
        icon={<TextFields />}
        label=""
        onClick={addNewTextElement}
      />
      <ActionButton
        icon={<InsertPhoto />}
        label=""
        onClick={addNewImageElement}
      />
      <ActionButton
        icon={<Category />}
        label=""
        onClick={addNewShapeElement}
      />
      <ActionButton
        icon={<FormatColorFill />}
        label=""
      />
    </div>
  )
}