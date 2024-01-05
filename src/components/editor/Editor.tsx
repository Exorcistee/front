import {
  FC,
  useEffect,
  useState,
} from 'react'
import { Actions } from '../header/Actions'
import { Header } from '../header/Header'
import { IBaseSlideElement } from '~/model/project/slide/element/BaseSlideElement'
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
  const [elements, setElements] = useState<IBaseSlideElement[]>([])
  const addElement = (newElement: IBaseSlideElement) => {
    setElements([...elements, newElement])
  }

  useEffect(() => {
    const updatedSlides = presentationData.map(slide => ({ ...slide }))
    setPresentationData(updatedSlides)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) //TODO: add presentationData

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

  const openPresentation = async () => {
    try {
      const fileInput = document.createElement('input')
      fileInput.type = 'file'
      fileInput.accept = '.json'
      const fileSelectedPromise = new Promise<void>((resolve) => {
        fileInput.addEventListener('change', async (event) => {
          const files = (event.target as HTMLInputElement).files
          if (files && files.length > 0) {
            const file = files[0]
            const fileContent = await readFileAsync(file)
            if (fileContent) {
              const presentationData = JSON.parse(fileContent) as ISlide[]
              setPresentationData(presentationData)
            }
          }
          resolve()
        })
      })
      document.body.appendChild(fileInput)
      await Promise.resolve()
      fileInput.click()
      await fileSelectedPromise
      document.body.removeChild(fileInput)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error opening file dialog:', error)
    }
  }

  const readFileAsync = (file: File): Promise<string | null> => {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target) {
          const content = event.target.result as string
          resolve(content)
        } else {
          resolve(null)
        }
      }
      reader.onerror = () => {
        resolve(null)
      }
      reader.readAsText(file)
    })
  }

  const handleAddSlide = () => {
    const newSlide: ISlide = {
      background: { color: 'red' }, // TODO: Сейчас данные хардкодятся, в будущем реализовать save текущих слайдов
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
      <Header
        openPresentation={openPresentation}
        savePresentationToFile = {savePresentationToFile}
      />
      <Actions
        handleAddSlide={handleAddSlide}
        handleDeleteSlide={handleDeleteSlide}
        onAddElement={addElement}
      />
      <div className={styles['work-space']}>
        <SlideList
          handleSelectSlide={handleSelectSlide}
          selectedSlides={selectedSlides}
          slideList={presentationData}
        />
        <MainSpace
          elements={elements}
          setElements={setElements}
        />
      </div>
    </div>
  )
}