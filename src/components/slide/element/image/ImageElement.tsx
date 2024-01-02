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
        src="https://i.pinimg.com/originals/0d/0c/da/0d0cda50d82a825d602ad45547112b0d.jpg"
        width={100}
      >
      </img>
    </div>
  )
}