import { IProjectHistory } from './ProjectHistory'
import { ISlide } from './slide/Slide'

export interface IProjectSlides {
  selectedSlides: number[];
  slides: ISlide[];
}

export interface IProject {
  history: IProjectHistory;
  projectSlides: IProjectSlides;
  title: string;
}
