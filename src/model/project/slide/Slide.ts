import { Background } from './Background'
import { SlideElementAll } from '~/components/editor/Editor'

export interface ISlide {
  background: Background;
  id: string;
  index: number;
  isSelected?: boolean;
  selectedElements: string[];
  slideElements: SlideElementAll[];
}
