import { Actions } from '../header/Actions'
import { FC } from 'react'
import { Header } from '../header/Header'
import { InfoSpace } from '../infoSpace/InfoSpace'
import { MainSpace } from '../mainSpace/MainSpace'
import { SlideList } from '../slideList/SlideList'
import styles from './Editor.module.css'
import { Text } from '~/model/project/slide/element/Text'
import { Size } from '~/model/base/Size'
import { IText } from '~/model/project/slide/element/Text'

interface EditorProps {}

export const Editor: FC<EditorProps > = (_: EditorProps ): JSX.Element => {
  return (
    <div className={styles.main}>
      <Header />
      <Actions />
      <div className={styles['work-space']}>
        <SlideList slideList={[]} />
        <MainSpace />
        <InfoSpace infoSpace={
          {
            id: Date.now(),
            slideElement: new Text({
              color: 'black',
              family: '123214',
              size: 13,
            },
            `TextId ${Date.now()}`,
            new Size(1, 1)
            ) as IText,
          }
        }
        />
      </div>
    </div>
  )
}