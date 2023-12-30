export interface HistoryProjects {
  listProject: Project[];
}

export interface Project {
  title: string;
  slide: Slide[];
  selectedSlide: SelectedSlide[];
}

export interface SelectedSlide {
  id: number;
}

export interface SelectedElement {
  id: number;
}

export interface Slide {
  id: number;
  background: Background;
  slideElement: SlideElement[] ;
  selectElement: SelectedElement[];
}

export interface Background {
  color: string;
  imageSource: string;
}

export interface SlideElement {
  id: number;
  layer: number;
  typeElement: Image | Shape | TextElement;
}

export interface TextElement {
  str: string;
  font: string;
  fontSize: number;
  leftPoint: Point;
  rightPoint: Point;
}

export interface Image {
  imgSource: string;
  position: Point;
  size: Size;
}

export interface Shape {
  form: Triangle | Rectangle | Circle;
  color: string;
  borderColor: string;
}

export interface Triangle {
  firstAngle: Point;
  secondAngle: Point;
  thirdAngle: Point;
}

export interface Rectangle {
  leftPoint: Point;
  rightPoint: Point;
}

export interface Circle {
  radius: number;
  center: Point;
}

export interface Size {
  width: number;
  height: number;
}

export interface Point {
  x: number;
  y: number;
}
