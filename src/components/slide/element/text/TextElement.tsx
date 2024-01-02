import { FC } from 'react'
import { IText } from '~/model/project/slide/element/Text'

interface TextElementProps {
  text: IText;
}

export const TextElement: FC<TextElementProps> = ({ text }: TextElementProps): JSX.Element => {

  return (
    <span>{text.text}</span>
  )
}
