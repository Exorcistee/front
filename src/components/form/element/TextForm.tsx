import { FieldCheckbox } from '../field/FieldCheckbox'
import { FieldInput } from '../field/FieldInput'
import { FieldSelect } from '../field/FieldSelect'
import styles from './Form.module.css'

interface TextFormProps {}

export function TextForm({}: TextFormProps) {
  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={`material-icons ${styles.headerFormIcon}`}>category</span>
        <span className={styles.headerFormTitle}>Текст</span>
      </div>
      <FieldInput
        label={'Высота'}
        type={'number'}
      />
      <FieldInput
        label={'Ширина'}
        type={'number'}
      />
      <FieldInput
        label={'Отступ сверху'}
        type={'number'}
      />
      <FieldInput
        label={'Отступ слева'}
        type={'number'}
      />
      <FieldInput
        label={'Рамка'}
        type={'number'}
      />
      <FieldSelect items={['точечная', 'пунктирная', 'сплошная', 'двойная']} />
      <FieldSelect items={[
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
      <div className={styles.line}></div>
      <FieldSelect
        items={['Arial', 'Roboto', 'Open Sans']}
        label={'Шрифт'}
      />
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
        label={'Цвет'}
      />
      <FieldCheckbox label={'Жирный'} />
      <FieldCheckbox label={'Подчеркнутый'} />
      <FieldCheckbox label={'Курсивный'} />
    </div>
  )
}
