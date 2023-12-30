import { FC } from 'react'
import { IBaseSlideElement } from '~/model/project/slide/element/BaseSlideElement'
import { IBaseSlideShape } from '~/model/project/slide/element/shape/BaseSlideShape'
import { IImage } from '~/model/project/slide/element/Image'
import { IText } from '~/model/project/slide/element/Text'
import { ImageElement } from './image/ImageElement'
import { ShapeElement } from './shape/ShapeElement'
import { SlideElementEnum } from '~/model/project/slide/element/SlideElementEnum'
import { TextElement } from './text/TextElement'

interface SlideElementProps {
  element: IBaseSlideElement;
}

const _SHAPES = [
  SlideElementEnum.Circle,
  SlideElementEnum.Rectangle,
  SlideElementEnum.Triangle,
]

export const SlideElement: FC<SlideElementProps> = ({ element }: SlideElementProps): JSX.Element => {
  if (element.type === SlideElementEnum.Text) {
    return (
      <TextElement text={element as IText} />
    )
  }

  if (_SHAPES.includes(element.type)) {
    return (
      <ShapeElement shape={element as IBaseSlideShape} />
    )
  }

  if (element.type === SlideElementEnum.Image) {
    return (
      <ImageElement image={element as IImage} />
    )
  }

  return (
    <></>
  )
}
