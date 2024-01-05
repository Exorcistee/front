import { FC } from 'react'
import Logo from '~/assets/icons/logo.png'
import { Menu } from './Menu'
import { Title } from './Title'
import styles from './Header.module.css'

interface HeaderProps {
  openPresentation: (fileName?: string) => void;
  savePresentationToFile: (fileName?: string) => void;
}

export const Header: FC<HeaderProps > = (props: HeaderProps ): JSX.Element => {
  return (
    <div className={styles.header}>
      <img
        className={styles.logo}
        src = {Logo}
      />
      <div className={styles['presentation-info']}>
        <Title />
        <Menu
          openPresentation={props.openPresentation}
          savePresentationToFile = {props.savePresentationToFile}
        />
      </div>
    </div>
  )
}