import {
  CSSProperties,
  FC,
  MouseEvent,
} from 'react'
import styles from './ActionButton.module.css'

interface ActionButtonProps {
  label?: string;
  icon: React.ReactNode;
  style?: CSSProperties;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const ActionButton: FC<ActionButtonProps> = ({
  label,
  icon,
  onClick,
}: ActionButtonProps): JSX.Element => {
  return (
    <button
      className={styles['action-button']}
      onClick={onClick} // Используем onClick, который принимает один из обработчиков
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