import { FC } from 'react'
import styles from './MenuButton.module.css'

interface MenuButtonProps {
  label: string;
  onClick?: () => void;
}

export const MenuButton: FC<MenuButtonProps> = ({
  label, onClick,
}: MenuButtonProps): JSX.Element => {
  return (
    <div
      className={styles['menu-button']}
      onClick={onClick}
    >
      {label}
    </div>
  )
}