import { Image } from './ImageTypes'
import { Shape } from './ShapeTypes'
import { Text } from './TextTypes'

export interface TypesElement {
  id: string;
  width: number;
  height: number;
  position: Position;
  color?: string;
  data: Text | Image | Shape;
}

export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

