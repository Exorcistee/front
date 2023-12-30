import { FC } from 'react'
import { IText } from '~/model/project/slide/element/Text'

interface TextElementProps {
  text: IText;
}

export const TextElement: FC<TextElementProps> = (_: TextElementProps): JSX.Element => {
  return (
    <div>
      <span>This is text</span>
    </div>
  )
}
