import { clamp } from '~/helpers/clamp'

export class Size {
  private _height: number

  private _width: number

  constructor(height: number, width: number) {
    this._height = clamp(height, 0, Math.abs(height))
    this._width = clamp(width, 0, Math.abs(width))
  }

  get height(): number {
    return this._height
  }

  get width(): number {
    return this._width
  }
}
