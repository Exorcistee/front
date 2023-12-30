import {
  BaseSlideElement,
  IBaseSlideElement,
} from './BaseSlideElement'
import { Point } from '~/model/base/Point'
import { Size } from '~/model/base/Size'
import { SlideElementEnum } from './SlideElementEnum'

export interface IFont {
  bold?: boolean;
  color: string;
  family: string;
  italic?: boolean;
  size: number;
  underline?: boolean;
}

export interface IText extends IBaseSlideElement {
  font: IFont;
  text: string;
}

export class Text extends BaseSlideElement implements IText {
  private _font: IFont

  private _text: string

  constructor(font: IFont, text: string, size: Size, color?: string, position?: Point) {
    super(SlideElementEnum.Text, size, color, position)

    this._font = font
    this._text = text
  }

  get font(): IFont {
    return this._font
  }

  get text(): string {
    return this._text
  }
}
