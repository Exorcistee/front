import {
  BaseSlideElement,
  IBaseSlideElement,
} from './BaseSlideElement'
import { Point } from '~/model/base/Point'
import { Size } from '~/model/base/Size'
import { SlideElementEnum } from './SlideElementEnum'

export interface IImage extends IBaseSlideElement {
  imgSource: string;
}

export class Image extends BaseSlideElement implements IImage {
  private _imgSource: string

  constructor(imgSource: string, size: Size, color?: string, position?: Point) {
    super(SlideElementEnum.Image, size, color, position)

    this._imgSource = imgSource
  }

  get imgSource(): string {
    return this._imgSource
  }
}
