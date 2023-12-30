import { ActionButton } from './ActionButton'
import { FC } from 'react'
import styles from './Actions.module.css'

interface ActionProps {}

export const Actions: FC<ActionProps> = (_: ActionProps): JSX.Element => {
  return (
    <div className={ styles.actionBar }>
      <div className={styles.actionMain}>
        <ActionButton
          icon = "add"
          label = "Добавить слайд"
        />
        <ActionButton
          icon = "delete"
          label = "delete"
        />
      </div>
      <ActionButton
        icon = "arrow_back_ios"
        label = ""
      />
      <ActionButton
        icon = "arrow_forward_ios"
        label = ""
      />
      <ActionButton
        icon = "text_fields"
        label = ""
      />
      <ActionButton
        icon = "add_to_photos"
        label = ""
      />
      <ActionButton
        icon = "category"
        label = ""
      />
      <ActionButton icon="imagesearch_roller" />
    </div>
  )
}