  import { TypesElement } from "../../models/element/elementsTypes"
  import { TextElement } from "./text/textElement";
  import styles from "./Element.module.css";
  import { ImageElement } from "./image/imageElement";
  import { ShapeElement } from './shape/shapeElement';
  
  type Props = {
    element: string;
  };

  export function ElementSlide(
    {element}: Props
  ) {
    if (element == "text") {
      return (
        <div>
          <span>This is text</span>
        </div>
      )
    }
    else if (element == "shape") {
      return (
        <div>
          <svg
            width = "1000"
            height = "1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx={100 / 2} cy={100 / 2} rx={100 / 2} ry={100/ 2}/>

          </svg> 
        </div>  )
    }
    else {

      return (
        <div>
          <img src = "../../../public/logo512.png" width={100} height={100}></img>
        </div>  
      )

    }
  }
  