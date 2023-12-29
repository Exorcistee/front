export interface Shape {
    form: Triangle | Rectangle | Cirlce;
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

export interface Cirlce {
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