import styles from './mainSpace.module.css'
import { Slide } from '../slide/Slide'

export function mainSpace () {
  return (
    <div className={styles.background}>
      <div className={styles.slide}>
        <Slide />
      </div>
    </div>
  )    
}

export default mainSpace