interface HistoryProjects {
  listProject: Project[];
}

interface Project {
  title: string;
  slide: Slide[];
  selectedSlide: SelectedSlide[];
}

interface SelectedSlide {
  id: number;
}

interface SelectedElement {
  id: number;
}

interface Slide {
  id: number;
  background: Background;
  slideElement: SlideElement[] ;
  selectElement: SelectedElement[];
}

interface Background {
  color: string;
  imageSource: string;
}

interface SlideElement {
  id: number;
  layer: number;
  typeElement: Image | Shape | TextElement;
}

interface TextElement {
  str: string;
  font: string;
  fontSize: number;
  leftPoint: Point;
  rightPoint: Point;
}

interface Image {
  imgSource: string;
  position: Point;
  size: Size;
}

interface Shape {
  form: Triangle | Rectangle | Cirlce;
  color: string;
  borderColor: string;
}

interface Triangle {
  firstAngle: Point;
  secondAngle: Point;
  thirdAngle: Point;
}

interface Rectangle {
  leftPoint: Point;
  rightPoint: Point;
}

interface Cirlce {
  radius: number;
  center: Point;
}

interface Size {
  width: number;
  height: number;
}

interface Point {
  x: number;
  y: number;
}

export {
  Point, Cirlce, Rectangle, Triangle, Shape, Image, Project, SelectedSlide,
  TextElement, Slide, SlideElement, Background, HistoryProjects,
}