import { FC } from 'react'
import styles from './Title.module.css'

interface TitleProps {}

export const Title: FC<TitleProps> = (_: TitleProps ): JSX.Element => {
  return (
    <input
      className={styles.title}
      placeholder="Новая презентация"
    />
  )
}