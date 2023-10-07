
type HistoryProjects = {
    listProject: Array<Project>,
}

type Project = {
    title: string,
    slide: Array<Slide>,
    selectedSlide: Array<SelectedSlide>,
}

type SelectedSlide = {
    id: number,
}

type SelectedElement = {
    id: number,
}

type Slide = {
    id: number,
    background: Background,
    slideElement: Array<SlideElement> ,
    selectElement: Array<SelectedElement>
}

type Background = {
    color: string,
    imageSource: string
}

type SlideElement = {
    id: number,
    layer: number,
    typeElement: Image | Shape | TextElement,
}

type TextElement = {
    str: string,
    font: string,
    fontSize: number,
    leftPoint: Point,
    rightPoint: Point,    
}

type Image = {
    imgSource: string,
    position: Point,
    size: Size,
}

type Shape = {
    form: Triangle | Rectangle | Cirlce,
    color: string,
    borderColor: string,
}

type Triangle = {
    firstAngle: Point,
    secondAngle: Point,
    thirdAngle: Point,
}

type Rectangle = {
    leftPoint: Point,
    rightPoint: Point,
}

type Cirlce = {
    radius: number,
    center: Point,
}

type Size = {
    width: number,
    height: number,
}

type Point = {
    x: number,
    y: number,
}

export {
    Point, Cirlce, Rectangle, Triangle, Shape, Image, Project, SelectedSlide,
    TextElement, Slide, SlideElement, Background, HistoryProjects
}