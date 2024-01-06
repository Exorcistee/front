import React, { FC } from 'react'
import { IBaseSlideElement } from '~/model/project/slide/element/BaseSlideElement'
import { Slide } from '../slide/Slide'
import styles from './MainSpace.module.css'

interface MainSpaceProps {
  elements: IBaseSlideElement[];
  setElements: React.Dispatch<React.SetStateAction<IBaseSlideElement[]>>;
  selectElements: (idElement: string) => void;
  selectedElements: string[];
}

export const MainSpace: FC<MainSpaceProps > = ( {
  elements, setElements, selectElements, selectedElements,
} : MainSpaceProps): JSX.Element => {
  return (
    <div className={styles.background}>
      <div className={styles.slide}>
        <Slide
          key={Date.now().toString()}
          slide={{
            background: { color: '123321' },
            id: '1',
            index: 1,
            selectedElements: selectedElements,
            slideElements: elements,
          }}
          index={1}
          isPreview={false}
          selectElements={selectElements}
          selectedElements={selectedElements}
          setElements={setElements}
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onCtrlSelectSlide={() => {}}
        />
      </div>
    </div>
  )
}
