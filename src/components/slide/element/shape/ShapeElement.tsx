import { FC } from 'react'
import { IBaseSlideShape } from '~/model/project/slide/element/shape/BaseSlideShape'
import styles from './ShapeElement.module.css'

interface ShapeElementProps {
  shape: IBaseSlideShape;
}

export const ShapeElement: FC<ShapeElementProps> = (shape: ShapeElementProps): JSX.Element => {
  const style = {
    height: shape.shape.size.height,
    width: shape.shape.size.width,
  }
  return (
    <div
      className={styles.rectangle}
      style={style}
    >
    </div>
  )
}