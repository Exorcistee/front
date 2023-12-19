import { CSSProperties } from "react";
import styles from "./ActionButton.module.css"

type ButtonProps = {
    label?: string;
    icon?: string;
    style?: CSSProperties;
}

export function ActionButton({
    label,
    icon,
    style
}:ButtonProps) {
    return <button className= {styles.actionButton }>123</button>
}