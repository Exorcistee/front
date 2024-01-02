import { ActionButton } from './ActionButton'
import AddBoxIcon from '@mui/icons-material/AddBox'
import Category from '@mui/icons-material/Category'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import DeleteIcon from '@mui/icons-material/Delete'
import { FC } from 'react'
import FormatColorFill from '@mui/icons-material/FormatColorFill'
import InsertPhoto from '@mui/icons-material/InsertPhoto'
import TextFields from '@mui/icons-material/TextFields'
import styles from './Actions.module.css'

interface ActionProps {}

export const Actions: FC<ActionProps> = (_: ActionProps): JSX.Element => {
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
      />
      <ActionButton
        icon={<ChevronRightIcon />}
        label=""
      />
      <ActionButton
        icon={<TextFields />}
        label=""
        onClick={() => {}}
      />
      <ActionButton
        icon={<InsertPhoto />}
        label=""
      />
      <ActionButton
        icon={<Category />}
        label=""
      />
      <ActionButton
        icon={<FormatColorFill />}
        label=""
      />
    </div>
  )
}