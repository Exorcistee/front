import { FC } from 'react'
import Logo from '~/assets/icons/logo.png'
import { Menu } from './Menu'
import { Title } from './Title'
import styles from './Header.module.css'

interface HeaderProps {}

export const Header: FC<HeaderProps > = (_: HeaderProps ): JSX.Element => {
  return (
    <div className={styles.header}>
      <img
        className={styles.logo}
        src = {Logo}
      />
      <div className={styles['presentation-info']}>
        <Title />
        <Menu />
      </div>
    </div>
  )
}