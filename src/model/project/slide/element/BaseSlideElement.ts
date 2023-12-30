import { Point } from '~/model/base/Point'
import { Size } from '~/model/base/Size'
import { SlideElementEnum } from './SlideElementEnum'

export interface IBaseSlideElement {
  color?: string;
  id: string;
  leftTopPoint: Point;
  position: Point;
  rightBottomPoint: Point;
  size: Size;
  type: SlideElementEnum;
}

export abstract class BaseSlideElement implements IBaseSlideElement {
  readonly id: string = 'id' // TODO: использовать функцию-helper, которая генерит уникальную uuid-строку

  readonly type: SlideElementEnum

  private _color?: string

  private _position: Point

  private _size: Size

  constructor(type: SlideElementEnum, size: Size, color?: string, position?: Point) {
    this._position = {
      x: position?.x ?? 0,
      y: position?.y ?? 0,
    }
    this._size = size

    this._color = color ?? '#000000' // TODO: добавить валидацию строки цвета

    this.type = type
  }

  get color(): string | undefined {
    return this._color
  }

  get position(): Point {
    return this._position
  }

  get leftTopPoint(): Point {
    return {
      x: this._position.x,
      y: this._position.y,
    }
  }

  get rightBottomPoint(): Point {
    return {
      x: this.position.x + this.size.width,
      y: this.position.y + this.size.height,
    }
  }

  get size(): Size {
    return this._size
  }
}
