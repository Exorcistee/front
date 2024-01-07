import { FC } from 'react'
import { IImage } from '~/model/project/slide/element/Image'

interface ImageElementProps {
  image: IImage;
}

export const ImageElement: FC<ImageElementProps> = ( props : ImageElementProps): JSX.Element => {
  return (
    <div>
      <img
        alt="Неверная ссылка"
        height={props.image.size.height}
        src={props.image.imgSource}
        width={props.image.size.width}
      >
      </img>
    </div>
  )
}