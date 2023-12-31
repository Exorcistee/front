import { Background } from './Background'
import { IBaseSlideElement } from './element/BaseSlideElement'

export interface ISlide {
  background: Background;
  id: number;
  selectElements?: number[];
  slideElements: IBaseSlideElement[];
}
