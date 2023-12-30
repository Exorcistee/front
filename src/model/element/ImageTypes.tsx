export interface Image {
  imgSource: string;
  position: Point;
  size: Size;
}

export interface Size {
  width: number;
  height: number;
}

export interface Point {
  x: number;
  y: number;
}