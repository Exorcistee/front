import { FC } from 'react'
import { IBaseSlideShape } from '~/model/project/slide/element/shape/BaseSlideShape'

interface ShapeElementProps {
  shape: IBaseSlideShape;
}

export const ShapeElement: FC<ShapeElementProps> = (_: ShapeElementProps): JSX.Element => {
  return (
    <div>
    </div>
  )
}