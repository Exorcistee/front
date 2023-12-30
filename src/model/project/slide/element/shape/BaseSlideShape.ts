import {
  BaseSlideElement,
  IBaseSlideElement,
} from '../BaseSlideElement'
import { Point } from '~/model/base/Point'
import { Size } from '~/model/base/Size'
import { SlideElementEnum } from '../SlideElementEnum'

export interface IBaseSlideShape extends IBaseSlideElement {
  borderColor: string;
}

export abstract class BaseSlideShape extends BaseSlideElement implements IBaseSlideShape {
  private _borderColor: string

  constructor(type: SlideElementEnum, size: Size, borderColor: string, color?: string, position?: Point) {
    super(type, size, color, position)

    this._borderColor = borderColor
  }

  get borderColor(): string {
    return this._borderColor
  }
}
