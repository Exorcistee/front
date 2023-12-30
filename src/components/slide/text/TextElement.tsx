import { FC } from 'react'
import { Text } from '~/model/element/TextTypes'

interface TextElementProps {
  text: Text;
}

export const TextElement: FC<TextElementProps> = (_: TextElementProps): JSX.Element => {
  return (
    <div></div>
  )
}
