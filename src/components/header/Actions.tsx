import {
  addImageElement,
  addShapeElement,
  addTextElement,
} from '~/store/actionsElements'
import {
  useDispatch,
  useSelector,
} from 'react-redux'
import { ActionButton } from './ActionButton'
import AddBoxIcon from '@mui/icons-material/AddBox'
import Category from '@mui/icons-material/Category'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import DeleteIcon from '@mui/icons-material/Delete'
import { FC } from 'react'
import FormatColorFill from '@mui/icons-material/FormatColorFill'
import { IBaseSlideElement } from '~/model/project/slide/element/BaseSlideElement'
import InsertPhoto from '@mui/icons-material/InsertPhoto'
import { RootState } from '~/store/reducer/rootReducer'
import { Size } from '~/model/base/Size'
import { SlideElementEnum } from '~/model/project/slide/element/SlideElementEnum'
import TextFields from '@mui/icons-material/TextFields'
import { deleteElement } from '~/store/actionsElements'
import styles from './Actions.module.css'

interface ActionProps {}

export const Actions: FC<ActionProps> = (_: ActionProps): JSX.Element => {
  const dispatch = useDispatch()
  const selectedElements = useSelector((state: RootState) => state.selectedElements) as Set<string>
  const selectedElementsArray = Array.from(selectedElements)
  const handleDelete= () => {
    dispatch(deleteElement(selectedElementsArray))
  }

  const addText = () => {
    const newElement: IBaseSlideElement = {
      id: `${Date.now()}`,
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
    dispatch(addTextElement(newElement))
  }

  const addShape = () => {
    const newElement: IBaseSlideElement = {
      color: '#ffc0cb',
      id: `${Date.now()}`,
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
    dispatch(addShapeElement(newElement))
  }

  const addImage = () => {
    const newElement: IBaseSlideElement = {
      id: `${Date.now()}`,
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
    dispatch(addImageElement(newElement))
  }

  return (
    <div className={styles['action-bar']}>
      <div className={styles['action-main']}>
        <ActionButton
          icon={<AddBoxIcon />}
          label="Добавить слайд"
        />
        <ActionButton
          icon={<DeleteIcon />}
          label="Удалить слайд"
        />
      </div>
      <ActionButton
        icon={<ChevronLeftIcon />}
        label=""
        onClick={handleDelete}
      />
      <ActionButton
        icon={<ChevronRightIcon />}
        label=""
      />
      <ActionButton
        icon={<TextFields />}
        label=""
        onClick={addText}
      />
      <ActionButton
        icon={<InsertPhoto />}
        label=""
        onClick={addImage}
      />
      <ActionButton
        icon={<Category />}
        label=""
        onClick={addShape}
      />
      <ActionButton
        icon={<FormatColorFill />}
        label=""
      />
    </div>
  )
}