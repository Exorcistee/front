import { Shape } from "./shapeTypes";
import { Image } from "./imageTypes";
import { Text } from "./textTypes";

export type TypesElement = {
    id: string;
    width: number;
    height: number;
    position: Position;
    color?: string;
    data: Text | Image | Shape;
  };

export type Position = {
  x: number;
  y: number;
};

export type Size = {
  width: number;
  height: number;
};

