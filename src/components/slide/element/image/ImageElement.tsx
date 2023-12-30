import { FC } from 'react'
import { IImage } from '~/model/project/slide/element/Image'

interface ImageElementProps {
  image: IImage;
}

export const ImageElement: FC<ImageElementProps> = (_: ImageElementProps): JSX.Element => {
  return (
    <div>
      <img
        height={100}
        src="~/public/logo512.png"
        width={100}
      >
      </img>
    </div>
  )
}