import { FC } from 'react'
import { FieldInput } from '../field/FieldInput'
import { FieldRadio } from '../field/FieldRadio'
import { FieldSelect } from '../field/FieldSelect'
import { IText } from '~/model/project/slide/element/Text'
import styles from './Form.module.css'

interface TextFormProps {
  element: IText;
  id: string;
}

export const TextForm: FC<TextFormProps> = (_: TextFormProps): JSX.Element => {
  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={styles.headerFormTitle}>Текст</span>
      </div>
      <div className={styles.card}>
        <FieldInput
          label={'Высота'}
          type={'number'}
        />
        <FieldInput
          label={'Ширина'}
          type={'number'}
        />
        <FieldInput
          label={'Рамка'}
          type={'number'}
        />
        <FieldSelect
          items={[
            'красный',
            'оранжевый',
            'желтый',
            'зеленый',
            'голубой',
            'синий',
            'фиолетовый',
            'розовый',
            'белый',
            'черный',
          ]}
          label={'Заливка'}
        />
      </div>
      <div className={styles.line}></div>
      <div className={styles.card}>
        <FieldSelect
          items={['Arial', 'Roboto', 'Open Sans']}
          label={'Шрифт'}
        />
        <FieldSelect
          items={[
            'красный',
            'оранжевый',
            'желтый',
            'зеленый',
            'голубой',
            'синий',
            'фиолетовый',
            'розовый',
            'белый',
            'черный',
          ]}
          label={'Цвет'}
        />
        <FieldInput
          label={'Размер'}
          type={'number'}
        />
        <FieldRadio label={'Жирный'} />
        <FieldRadio label={'Подчеркнутый'} />
        <FieldRadio label={'Курсивный'} />
      </div>
    </div>
  )
}
