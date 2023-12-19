
export type HistoryProjects = {
    listProject: Array<Project>,
}

export type Project = {
    title: string,
    slide: Array<Slide>,
    selectedSlide: Array<SelectedSlide>,
}

export type SelectedSlide = {
    id: number,
}

export type SelectedElement = {
    id: number,
}

export type Slide = {
    id: number,
    background: Background,
    slideElement: Array<SlideElement> ,
    selectElement: Array<SelectedElement>
}

export type Background = {
    color: string,
    imageSource: string
}

export type SlideElement = {
    id: number,
    layer: number,
    typeElement: Image | Shape | TextElement,
}

export type TextElement = {
    str: string,
    font: string,
    fontSize: number,
    leftPoint: Point,
    rightPoint: Point,    
}

export type Image = {
    imgSource: string,
    position: Point,
    size: Size,
}

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
