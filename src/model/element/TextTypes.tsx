export interface Font {
  bold?: boolean;
  color: string;
  family: string;
  italic?: boolean;
  size: number;
  underline?: boolean;
}

export interface Text {
  font: Font;
  text: string;
}
