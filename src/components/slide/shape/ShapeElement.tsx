import { FC } from 'react'
import { Shape } from '~/model/element/ShapeTypes'

interface ShapeElementProps {
  Shape: Shape;
  width: number;
  height: number;
}

export const ShapeElement: FC<ShapeElementProps> = (_: ShapeElementProps): JSX.Element => {
  return (
    <div>
    </div>
  )
}