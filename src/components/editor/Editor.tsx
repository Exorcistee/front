import { Header } from '../header/Header'
import { Actions } from '../header/Actions'
import SlideList from '../slideList/SlideList'
import MainSpace from '../mainSpace/MainSpace'
import InfoSpace from '../InfoSpace/InfoSpace'
import styles from './Editor.module.css'

export function Editor() {
  return (
    <div className = {styles.main}>
      <Header />
      <Actions />
      <div className = {styles.workSpace}>
        <SlideList />
        <MainSpace />
        <InfoSpace />
      </div>
    </div>
  )
}