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
          
            <div>
              <span>This is text</span>
            </div>
          
            <div>
              <svg
                width = "1000"
                height = "1000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse cx={100 / 2} cy={100 / 2} rx={100 / 2} ry={100/ 2}/>

              </svg> 
            </div> 
        
            <div>
              <img src = "../../../public/logo512.png" width={100} height={100}></img>
            </div>
      </div>
    </div>
  </div>
  )
}