import { Shape } from '~/model/element/ShapeTypes'

interface Props {
  Shape: Shape;
  width: number;
  height: number;
}

export function ShapeElement({
  Shape, width, height,
}: Props) {
  return (
    <div>
    </div>
  )
}