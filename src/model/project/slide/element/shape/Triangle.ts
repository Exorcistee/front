import {
  BaseSlideShape,
  IBaseSlideShape,
} from './BaseSlideShape'
import { Point } from '~/model/base/Point'
import { Size } from '~/model/base/Size'
import { SlideElementEnum } from '../SlideElementEnum'

export interface ITriangle extends IBaseSlideShape {
  firstAngle: Point;
  secondAngle: Point;
  thirdAngle: Point;
}

export class Triangle extends BaseSlideShape implements ITriangle {
  constructor(_: ITriangle, borderColor: string, color?: string, position?: Point) {
    // TODO: считать корректный размер (Size) на основе трёх точек треугольника
    super(SlideElementEnum.Triangle, new Size(0, 0), borderColor, color, position)
  }

  get firstAngle(): Point {
    return {
      x: 0,
      y: 0,
    }
  }

  get secondAngle(): Point {
    return {
      x: 0,
      y: 0,
    }
  }

  get thirdAngle(): Point {
    return {
      x: 0,
      y: 0,
    }
  }
}