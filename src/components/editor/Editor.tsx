import React from 'react'
import { Header } from '../header/Header'
import { Actions } from '../header/Actions'
import SlideList from '../slideList/slideList'
import MainSpace from '../mainSpace/mainSpace'
import InfoSpace from '../InfoSpace/infoSpace'
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