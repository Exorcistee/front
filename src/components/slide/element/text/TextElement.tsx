import { FC } from 'react'
import { IText } from '~/model/project/slide/element/Text'

interface TextElementProps {
  text: IText;
}

export const TextElement: FC<TextElementProps> = (props: TextElementProps): JSX.Element => {
  return (
    <div>
      <span>
        {props.text.text}
      </span>
    </div>
  )
}
