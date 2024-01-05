import {
  FC,
  useState,
} from 'react'
import { Actions } from '../header/Actions'
import { Header } from '../header/Header'
import { IBaseSlideElement } from '~/model/project/slide/element/BaseSlideElement'
import { MainSpace } from '../mainSpace/MainSpace'
import { SlideList } from '../slideList/SlideList'
import styles from './Editor.module.css'

interface EditorProps {}

export const Editor: FC<EditorProps > = (_: EditorProps ): JSX.Element => {
  const [elements, setElements] = useState<IBaseSlideElement[]>([])
  const addElement = (newElement: IBaseSlideElement) => {
    setElements([...elements, newElement])
  }
  const [selectedSlides] = useState<number[]>([])

  return (
    <div className={styles.main}>
      <Header />
      <Actions onAddElement={addElement} />
      <div className={styles['work-space']}>
        <SlideList
          selectedSlides={selectedSlides}
          slideList={[]}
        />
        <MainSpace
          elements={elements}
          setElements={setElements}
        />
      </div>
    </div>
  )
}