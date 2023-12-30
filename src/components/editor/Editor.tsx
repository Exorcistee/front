import { Actions } from '../header/Actions'
import { Header } from '../header/Header'
import { MainSpace } from '../mainSpace/MainSpace'
import { SlideList } from '../slideList/SlideList'
import styles from './Editor.module.css'

export function Editor() {
  return (
    <div className={styles.main}>
      <Header />
      <Actions />
      <div className={styles.workSpace}>
        <SlideList />
        <MainSpace />
      </div>
    </div>
  )
}