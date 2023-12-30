import { Image } from './ImageTypes'
import { Shape } from './ShapeTypes'
import { Text } from './TextTypes'

export interface TypesElement {
  color?: string;
  data: Text | Image | Shape;
  height: number;
  id: string;
  position: Position;
  width: number;
}

export interface Position {
  x: number;
  y: number;
}

export interface Size {
  height: number;
  width: number;
}

