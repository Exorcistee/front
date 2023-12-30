import {
  CSSProperties,
  FC,
} from 'react'
import styles from './ActionButton.module.css'

interface ActionButtonProps {
  label?: string;
  icon?: string;
  style?: CSSProperties;
}

export const ActionButton: FC<ActionButtonProps> = ({
  label,
  icon,
}: ActionButtonProps): JSX.Element => {
  return (
    <button className= {styles.actionButton }>
      {icon && (
        <span className={`${styles.buttonIcon} material-icons`}>
          {icon}
        </span>
      )}
      {label && (
        <span className={styles.actionButtonLabel}>
          {label}
        </span>
      )}
    </button>
  )
}