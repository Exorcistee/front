import {
  BaseSlideShape,
  IBaseSlideShape,
} from './BaseSlideShape'
import { Point } from '~/model/base/Point'
import { Size } from '~/model/base/Size'
import { SlideElementEnum } from '../SlideElementEnum'

export interface ICircle extends IBaseSlideShape {
  radius: number;
  center: Point;
}

export class Circle extends BaseSlideShape implements ICircle {
  constructor(radius: number, borderColor: string, color?: string, position?: Point) {
    super(SlideElementEnum.Circle, new Size(radius, radius), borderColor, color, position)
  }

  get radius(): number {
    return this.size.height / 2
  }

  get center(): Point {
    return {
      x: this.position.x + this.radius,
      y: this.position.y + this.radius,
    }
  }
}
