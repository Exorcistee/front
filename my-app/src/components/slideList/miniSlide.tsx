import { TypesElement } from "../../models/element/elementsTypes";
import { ElementSlide } from "../slide/Element"
import styles from "./miniSlide.module.css";

type MiniSlideProps = {
    index?: number;
    elements?: TypesElement[];
}

export function MiniSlide ({
    index,
    elements
    }: MiniSlideProps) {

    return (
        <div className={styles.slidePreview}>
      <div className={styles.slideMiniature}>
        <div className={styles.slidePreviewMini}>
          <ElementSlide
          element = "text"/>
          <ElementSlide
          element = "shape"/>
          <ElementSlide
          element = "image"/>
        </div>
      </div>
    </div>
    )
}

