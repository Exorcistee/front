import {
  FC,
  useState,
} from 'react'
import { Actions } from '../header/Actions'
import { Header } from '../header/Header'
import { MainSpace } from '../mainSpace/MainSpace'
import { SlideList } from '../slideList/SlideList'
import styles from './Editor.module.css'

interface EditorProps {}

export const Editor: FC<EditorProps > = (_: EditorProps ): JSX.Element => {
  const [selectedSlides] = useState<number[]>([])

  return (
    <div className={styles.main}>
      <Header />
      <Actions />
      <div className={styles['work-space']}>
        <SlideList
          selectedSlides={selectedSlides}
          slideList={[]}
        />
        <MainSpace />
      </div>
    </div>
  )
}