import { IProjectHistory } from './ProjectHistory'
import { ISlide } from './slide/Slide'

export interface IProject {
  history: IProjectHistory;
  selectedSlides: number[];
  slides: ISlide[];
  title: string;
}
