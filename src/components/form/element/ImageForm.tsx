import { FC } from 'react'
import { FieldInput } from '../field/FieldInput'
import { IImage } from '~/model/project/slide/element/Image'
import styles from './Form.module.css'

interface ImageFormProps {
  element: IImage;
  id: string;
}

export const ImageForm: FC<ImageFormProps> = (_: ImageFormProps): JSX.Element => {
  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={styles.headerFormTitle}>Изображение</span>
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
      </div>
    </div>
  )
}
