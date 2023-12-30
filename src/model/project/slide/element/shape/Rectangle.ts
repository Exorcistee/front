import {
  BaseSlideShape,
  IBaseSlideShape,
} from './BaseSlideShape'
import { Point } from '~/model/base/Point'
import { Size } from '~/model/base/Size'
import { SlideElementEnum } from '../SlideElementEnum'

export interface IRectangle extends IBaseSlideShape {}

export class Rectangle extends BaseSlideShape implements IRectangle {
  constructor(size: Size, borderColor: string, color?: string, position?: Point) {
    super(SlideElementEnum.Rectangle, size, borderColor, color, position)
  }
}
