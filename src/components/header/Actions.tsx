import AcUnitIcon from '@mui/icons-material/AcUnit'
import { ActionButton } from './ActionButton'
import { FC } from 'react'
import { IText } from '~/model/project/slide/element/Text'
import styles from './Actions.module.css'

interface ActionProps {}

export const Actions: FC<ActionProps> = (_: ActionProps): JSX.Element => {
  return (
    <div className={styles['action-bar']}>
      <div className={styles['action-main']}>
        <ActionButton
          icon={<AcUnitIcon />}
          label="Добавить слайд"
        />
        <ActionButton
          icon="delete"
          label="delete"
        />
      </div>
      <ActionButton
        icon="arrow_back_ios"
        label=""
      />
      <ActionButton
        icon="arrow_forward_ios"
        label=""
      />
      <ActionButton
        icon="text_fields"
        label=""
        onClick={() => {
          const newText: IText = {
            font: {
              color: '#111111',
              family: '123214',
              size: 20,
            },
            id: '123',
            leftTopPoint:{
              x: 10,
              y: 10,
            },
            rightBottomPoint:{
              x: 10,
              y: 10,
            },
            text: '123',
            position:{
              x: 10,
              y: 10,
            },
            size: {

              height: 10,
              width: 10,



            }

          }
        }}
      />
      <ActionButton
        icon="add_to_photos"
        label=""
      />
      <ActionButton
        icon="category"
        label=""
      />
      <ActionButton icon="imagesearch_roller" />
    </div>
  )
}