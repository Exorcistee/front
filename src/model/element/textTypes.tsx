export interface Font {
  family: string;
  color: string;
  size: number;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

export interface Text {
  text: string;
  font: Font;
}
