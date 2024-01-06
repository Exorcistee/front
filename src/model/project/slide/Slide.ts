import { Background } from './Background'
import { IBaseSlideElement } from './element/BaseSlideElement'

export interface ISlide {
  background: Background;
  id: string;
  index: number;
  isSelected?: boolean;
  selectedElements: string[];
  slideElements: IBaseSlideElement[];
}
