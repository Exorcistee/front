import { FC } from 'react'
import { FieldInput } from '../field/FieldInput'
import { FieldSelect } from '../field/FieldSelect'
import styles from './Form.module.css'

interface FigureFormProps {}

export const FigureForm: FC<FigureFormProps> = (_: FigureFormProps): JSX.Element => {
  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={styles.headerFormTitle}>Фигура</span>
      </div>
      <div className={styles.card}>
        <FieldInput
          label={'Размер'}
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
          label={'Цвет элемента'}
        />
      </div>
      <div className={styles.line}></div>
      <div className={styles.card}>
        <FieldSelect
          items={['круг', 'треугольник', 'прямоугольник']}
          label={'Тип фигуры'}
        />
      </div>
    </div>
  )
}
