import { FC } from 'react'
import { Text } from '~/model/element/textTypes'

interface TextElementProps {
  text: Text;
}

export const TextElement: FC<TextElementProps> = (_: TextElementProps): JSX.Element => {
  return (
    <div></div>
  )
}
