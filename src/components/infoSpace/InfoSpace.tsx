import { FC } from 'react'
import styles from './InfoSpace.module.css'

interface InfoSpaceProps {}

export const InfoSpace: FC<InfoSpaceProps> = (_: InfoSpaceProps): JSX.Element => {
  return (
    <div className={styles.slidePanel}>
    </div>
  )
}
