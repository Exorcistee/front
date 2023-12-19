export type Text = {
    text: string;
    font: Font;
  };
  
  export type Font = {
    family: string;
    color: string;
    size: number;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
  };