import { FC } from 'react'
import { Slide } from '../slide/Slide'
import styles from './MainSpace.module.css'

interface MainSpaceProps {}

export const MainSpace: FC<MainSpaceProps > = (_: MainSpaceProps): JSX.Element => {
  return (
    <div className={styles.background}>
      <div className={styles.slide}>
        <Slide
          slide={{
            background:{ color: '123321' },
            id: 1,
            selectElements: [],
            slideElements: [],
          }}
          isPreview={false}
        />
      </div>
    </div>
  )
}
