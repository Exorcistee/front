import styles from "./Element.module.css"
import { TypesElement } from "../../models/element/elementsTypes";
import { ElementSlide } from "./Element"

export function Slide () {
    return (
        <div className={styles.Slide}>
            <ElementSlide
            element = "text"/>
            <ElementSlide
            element = "shape"/>
            <ElementSlide
            element = "image"/>  
        </div>
    )
}