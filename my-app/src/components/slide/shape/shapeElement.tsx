import { Shape } from '../../../models/element/shapeTypes';
import { shapeTriangle } from './shapeTriangle';
import { shapeRectangle }  from './shapeRectangle';
import { shapeCircle } from './shapeCircle';

type Props = {
    Shape: Shape,
    width: number;
    height: number;
}

export function ShapeElement({Shape, width, height}: Props) {
    return (
        <div>
        </div>
    )
}