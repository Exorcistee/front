import { TypesElement } from "../../models/element/elementsTypes";
import { ElementSlide } from "../slide/Element"
import styles from "./miniSlide.module.css";

type MiniSlideProps = {
    index?: number;
    elements?: TypesElement[];
}

// export function MiniSlide ({
//     index,
//     elements
//     }: MiniSlideProps) {

//     return (
//         <div className={styles.slidePreview}>
//       <div className={styles.slideMiniature}>
//         <div className={styles.slidePreviewMini}>
//           <ElementSlide
//           element = "text"/>
//           <ElementSlide
//           element = "shape"/>
//           <ElementSlide
//           element = "image"/>
//         </div>
//       </div>
//     </div>
//     )
// }

export function MiniSlide ({
  index,
  elements
  }: MiniSlideProps) {

  return (
    <div className={styles.slidePreview}>
    <div className={styles.slideMiniature}>
      <div className={styles.slidePreviewMini}>
          
                <span>Строка</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <ellipse cx={50} cy={50} rx={50} ry={50}/>
                </svg>
                <div>
                <svg
                    
                    xmlns = "http://www.w3.org/2000/svg"
                >
                    <polygon points="60,25 140,25 160,60"/>
                </svg>
                </div>   
                <img src = "https://img.freepik.com/free-photo/reflection-of-rocky-mountains-and-sky-on-beautiful-lake_23-2148153610.jpg?w=996&t=st=1703279081~exp=1703279681~hmac=d677c850c4eeb815652077e92f977eef5df026e8626ae3249065b6a5fdb04f34" width = "100" height = "100" alt = "фото"></img>
               
      </div>
    </div>
  </div>
  )
}