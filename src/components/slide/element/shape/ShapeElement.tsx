import { FC } from 'react'
import { IBaseSlideShape } from '~/model/project/slide/element/shape/BaseSlideShape'
import styles from './ShapeElement.module.css'

interface ShapeElementProps {
  shape: IBaseSlideShape;
}

export const ShapeElement: FC<ShapeElementProps> = (_: ShapeElementProps): JSX.Element => {
  return (
    <div className={styles.rectangle}>
    </div>
  )
}