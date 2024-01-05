import { FC } from 'react'
import { MenuButton } from './MenuButton'
import styles from './Menu.module.css'

interface MenuProps {
  savePresentationToFile: (fileName?: string) => void;
}

export const Menu: FC<MenuProps> = ({ savePresentationToFile }: MenuProps): JSX.Element => {
  return (
    <div className={styles['presentation-menu-bar']}>
      <MenuButton label="Создать" />
      <MenuButton label="Открыть" />
      <MenuButton
        label="Сохранить"
        onClick={() => {
          savePresentationToFile()
        }}
      />
    </div>
  )
}
