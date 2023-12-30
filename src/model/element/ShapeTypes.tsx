export interface Shape {
  borderColor: string;
  color: string;
  form: Triangle | Rectangle | Circle;
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
  height: number;
  width: number;
}

export interface Point {
  x: number;
  y: number;
}