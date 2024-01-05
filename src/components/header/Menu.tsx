import { FC } from 'react'
import { MenuButton } from './MenuButton'
import styles from './Menu.module.css'

interface MenuProps {
  openPresentation: (fileName?: string) => void;
  savePresentationToFile: (fileName?: string) => void;
}

export const Menu: FC<MenuProps> = (props: MenuProps): JSX.Element => {
  return (
    <div className={styles['presentation-menu-bar']}>
      <MenuButton
        label="Открыть"
        onClick={() => {
          props.openPresentation()
        }}
      />
      <MenuButton
        label="Сохранить"
        onClick={() => {
          props.savePresentationToFile()
        }}
      />
    </div>
  )
}
