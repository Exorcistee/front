
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

type Slide = {
    id: number,
    background: Background,
    slideElement: Array<SlideElement> 
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
    width: number,
    height: number,
}

type Shape = {
    form: Triangle | Rectangle | Cirlce,
    color: string,
    border_color: string,
}

type Triangle = {
    first_angle: Point,
    second_angle: Point,
    third_angle: Point,
}

type Rectangle = {
    leftPoint: Point,
    rightPoint: Point,
}

type Cirlce = {
    radius: number,
    center: Point,
}

type Point = {
    x: number,
    y: number,
}

export {
    Point, Cirlce, Rectangle, Triangle, Shape, Image, Project, SelectedSlide,
    TextElement, Slide, SlideElement, Background, HistoryProjects
}