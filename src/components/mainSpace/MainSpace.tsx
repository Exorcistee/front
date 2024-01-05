import React, { FC } from 'react'
import { IBaseSlideElement } from '~/model/project/slide/element/BaseSlideElement'
import { Slide } from '../slide/Slide'
import styles from './MainSpace.module.css'

interface MainSpaceProps {
  elements: IBaseSlideElement[];
  setElements: React.Dispatch<React.SetStateAction<IBaseSlideElement[]>>;
}

export const MainSpace: FC<MainSpaceProps > = ( {
  elements, setElements,
} : MainSpaceProps): JSX.Element => {
  return (
    <div className={styles.background}>
      <div className={styles.slide}>
        <Slide
          key={Date.now().toString()}
          slide={{
            background: { color: '123321' },
            id: 1,
            index: 1,
            selectElements: [],
            slideElements: elements,
          }}
          index={1}
          isPreview={false}
          setElements={setElements}
          onCtrlSelectSlide={() => {}}
        />
      </div>
    </div>
  )
}
