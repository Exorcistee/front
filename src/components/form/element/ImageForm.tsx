import {
  FC,
  useState,
} from 'react'
import { FieldInput } from '../field/FieldInput'
import { IImage } from '~/model/project/slide/element/Image'
import { Size } from '~/model/base/Size'
import styles from './Form.module.css'

interface ImageFormProps {
  element: IImage;
  id: string;
  onFormChange: (updatedData: Partial<IImage>) => void;
}

export const ImageForm: FC<ImageFormProps> = (props: ImageFormProps): JSX.Element => {

  const [height, setHeight] = useState(props.element.size.height)
  const [width, setWidth] = useState(props.element.size.width)

  const handleHeightChange = (newHeight: number) => {
    setHeight(newHeight)
    props.onFormChange({
      ...props.element,
      size: new Size(newHeight, props.element.size.width),
    })
  }

  const handleWidthChange = (newWidth: number) => {
    setWidth(newWidth)
    props.onFormChange({
      ...props.element,
      size: new Size(props.element.size.height, newWidth),
    })
  }

  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={styles.headerFormTitle}>Изображение</span>
      </div>
      <div className={styles.card}>
        <FieldInput
          label={'Высота'}
          type={'number'}
          value={(height).toString()}
          onChange={(newHeight) => {handleHeightChange(parseFloat(newHeight))
          }}
        />
        <FieldInput
          label={'Ширина'}
          type={'number'}
          value={(width).toString()}
          onChange={(newWidth) => {handleWidthChange(parseFloat(newWidth))
          }}
        />
      </div>
    </div>
  )
}
