import {
  FC,
  useEffect,
  useState,
} from 'react'
import { Actions } from '../header/Actions'
import { Header } from '../header/Header'
import { ISlide } from '~/model/project/slide/Slide'
import { MainSpace } from '../mainSpace/MainSpace'
import { Size } from '~/model/base/Size'
import { SlideList } from '../slideList/SlideList'
import { Text } from '~/model/project/slide/element/Text'
import styles from './Editor.module.css'

interface EditorProps {
  slides?: ISlide[];
}

export const Editor: FC<EditorProps > = (props: EditorProps ): JSX.Element => {
  const [presentationData, setPresentationData] = useState<ISlide[]>(props.slides ?? [])
  const [selectedSlides, setSelectedSlides] = useState<number[]>([])

  useEffect(() => {
    const updatedSlides = presentationData.map(slide => ({ ...slide }))
    setPresentationData(updatedSlides)
  }, [presentationData])

  const handleSelectSlide = (index: number) => {
    setPresentationData((prevSlideList) => {
      const updatedSlides = prevSlideList.map((slide, i) => {
        return {
          ...slide,
          isSelected: i === index ? !slide.isSelected : slide.isSelected,
        }
      })
      const updatedSelectedSlides = updatedSlides
        .filter((slide) => slide.isSelected)
        .map((slide) => slide.index)

      setSelectedSlides(updatedSelectedSlides)
      return updatedSlides
    })
  }

  const saveTextToFile = (text: string, fileName: string) => {
    const a = document.createElement('a')
    const file = new Blob([text], { type: 'text/plain' })
    a.href = URL.createObjectURL(file)
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    a.remove()
  }
  const savePresentationToFile = (fileName?: string) => {
    const text = JSON.stringify(presentationData)
    saveTextToFile(text, fileName ?? 'presentation.json')
  }

  const handleAddSlide = () => {
    const newSlide: ISlide = {
      background: { color: 'red' }, // TODO: Цвет сейчас не меняется, по-умолчанию ставится белый
      id: Date.now(),
      index: presentationData.length,
      slideElements: [
        new Text({
          color: 'black',
          family: '123214',
          size: 13,
        },
        `TextId ${Date.now()}`,
        new Size(1, 1)
        ),
      ],
    }
    setPresentationData(prevSlideList => [...prevSlideList, newSlide])
  }

  const handleDeleteSlide = () => {
    setPresentationData((prevSlideList) => {
      const updatedSlideList = prevSlideList.filter((_, index) => !selectedSlides.includes(index))
      const updatedSlideListWithNewIndexes = updatedSlideList.map((slide, index) => ({
        ...slide,
        index: index,
      }))

      return updatedSlideListWithNewIndexes
    })
    setSelectedSlides([])
  }

  return (
    <div className={styles.main}>
      <Header savePresentationToFile = {savePresentationToFile} />
      <Actions
        handleAddSlide={handleAddSlide}
        handleDeleteSlide={handleDeleteSlide}
      />
      <div className={styles['work-space']}>
        <SlideList
          handleSelectSlide={handleSelectSlide}
          selectedSlides={selectedSlides}
          slideList={presentationData}
        />
        <MainSpace />
      </div>
    </div>
  )
}