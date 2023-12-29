import styles from './header.module.css'

export function Title() {

  return (

    <input
      className={styles.title}
      placeholder="Новая презентация"
    />

  )
}