import {
  CSSProperties,
  FC,
} from 'react'
import styles from './ActionButton.module.css'
import {addElement} from '../slide/Slide'

interface ActionButtonProps {
  label?: string;
  icon: React.ReactNode;
  style?: CSSProperties;
  onClick?:() => void;
}

export const ActionButton: FC<ActionButtonProps> = ({
  label,
  icon,
  onClick,
}: ActionButtonProps): JSX.Element => {
  return (
    <button
      className={styles['action-button']}
      onClick={onClick}
    >
      {icon}
      {label && (
        <span className={styles['action-button-label']}>
          {label}
        </span>
      )}
    </button>
  )
}