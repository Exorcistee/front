import Logo from '~/assets/icons/logo.png'
import { Title } from './Title'
import styles from './header.module.css'
import { Menu } from './Menu'

export function Header() {
  return (
    <div className = {styles.header}>
      <img
        className={styles.logo}
        src = {Logo}
      />
      <div className= {styles.presentationInfo}>
        <Title />
        <Menu />
      </div>
    </div>
  )
}