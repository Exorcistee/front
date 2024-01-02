import { Background } from './Background'
import { IBaseSlideElement } from './element/BaseSlideElement'

export interface ISlide {
  background: Background;
  id: number;
  index: number;
  isSelected?: boolean;
  selectElements?: number[];
  slideElements: IBaseSlideElement[];
}
