import { CSSProperties } from "react";
import styles from "./ActionButton.module.css"

type ButtonProps = {
    label?: string;
    icon?: string;
    style?: CSSProperties;
}

export function ActionButton({
    label,
    icon
}:ButtonProps) {
    return (
    <button className= {styles.actionButton }>
        {icon && (
        <span
          className={`${styles.buttonIcon} material-icons`}
        >
          {icon}
        </span>
        )}
        {label && (
        <span
          className={styles.actionButtonLabel}
        >
          {label}
        </span>
      )}
        
    </button>
    )
}