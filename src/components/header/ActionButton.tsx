import {
  CSSProperties,
  FC,
} from 'react'
import styles from './ActionButton.module.css'

interface ActionButtonProps {
  label?: string;
  icon: React.ReactNode;
  style?: CSSProperties;
}

export const ActionButton: FC<ActionButtonProps> = ({
  label,
  icon,
}: ActionButtonProps): JSX.Element => {
  return (
    <button className={styles['action-button']}>
      {icon}
      {label && (
        <span className={styles['action-button-label']}>
          {label}
        </span>
      )}
    </button>
  )
}