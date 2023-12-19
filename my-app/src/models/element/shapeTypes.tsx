export type Shape = {
    form: Triangle | Rectangle | Cirlce,
    color: string,
    borderColor: string,
}

export type Triangle = {
    firstAngle: Point,
    secondAngle: Point,
    thirdAngle: Point,
}

export type Rectangle = {
    leftPoint: Point,
    rightPoint: Point,
}

export type Cirlce = {
    radius: number,
    center: Point,
}

export type Size = {
    width: number,
    height: number,
}

export type Point = {
    x: number,
    y: number,
}