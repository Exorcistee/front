import {
  FC,
  useEffect,
  useState,
} from 'react'
import {
  IText,
  Text,
} from '~/model/project/slide/element/Text'
import { Actions } from '../header/Actions'
import { Header } from '../header/Header'
import { IBaseSlideShape } from '~/model/project/slide/element/shape/BaseSlideShape'
import { IImage } from '~/model/project/slide/element/Image'
import { ISlide } from '~/model/project/slide/Slide'
import { InfoSpace } from '../infoSpace/InfoSpace'
import { MainSpace } from '../mainSpace/MainSpace'
import { Size } from '~/model/base/Size'
import { SlideList } from '../slideList/SlideList'
import styles from './Editor.module.css'

interface EditorProps {
  slides?: ISlide[];
}

export type SlideElementAll = IText | IBaseSlideShape | IImage

export const Editor: FC<EditorProps > = (props: EditorProps ): JSX.Element => {
  const [presentationData, setPresentationData] = useState<ISlide[]>(props.slides ?? [])
  const [selectedSlides, setSelectedSlides] = useState<number[]>([])
  const [elements, setElements] = useState<SlideElementAll[]>([])

  const defaultElement = new Text({
    bold: false,
    color: 'black',
    family: '123214',
    italic: false,
    size: 13,
    underline: false,
  },
  'default',
  new Size(0, 0)
  )

  const [mainElement, setMainElement] = useState<SlideElementAll>(defaultElement)
  const [mainSpaceColor, setMainSpaceColor] = useState<string>('белый')
  const addElement = (newElement: SlideElementAll) => {
    setElements([...elements, newElement])
  }

  const [selectedElements, setSelectedElements] = useState<string[]>([])

  const selectElement = (selectedID: string) => {
    setSelectedElements(prevSelectedElements => {
      if (prevSelectedElements.includes(selectedID)) {
        return prevSelectedElements.filter(id => id !== selectedID)
      } else {
        return [...prevSelectedElements, selectedID]
      }
    })
  }

  const deleteElement = () => {
    setElements(elements.filter(el => !selectedElements.includes(el.id)))
  }

  const updateElement = (updatedElement: SlideElementAll) => {
    setElements(elements.map(el => el.id === updatedElement.id ? updatedElement : el))
  }

  useEffect(() => {
    const getLastSelectedElement = () => {
      if (selectedElements.length === 0) return defaultElement
      const lastSelectedId = selectedElements[selectedElements.length - 1]
      return elements.find(el => el.id === lastSelectedId) ?? defaultElement
    }
    setMainElement(getLastSelectedElement())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedElements, elements])

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
      background: { color: 'red' },
      id: `${Date.now()}`,
      index: presentationData.length,
      selectedElements: [],
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

  const fillSlide = (color: string) => {
    setMainSpaceColor(color)
  }

  return (
    <div className={styles.main}>
      <Header
        openPresentation={openPresentation}
        savePresentationToFile = {savePresentationToFile}
      />
      <Actions
        deleteElement={deleteElement}
        handleAddSlide={handleAddSlide}
        handleDeleteSlide={handleDeleteSlide}
        onAddElement={addElement}
        onColorChange={fillSlide}
      />
      <div className={styles['work-space']}>
        <SlideList
          handleSelectSlide={handleSelectSlide}
          selectElements={selectElement}
          selectedElements={selectedElements}
          selectedSlides={selectedSlides}
          setElements={setElements}
          slideList={presentationData}
        />
        <MainSpace
          backgroundColor={mainSpaceColor}
          elements={elements}
          selectElements={selectElement}
          selectedElements={selectedElements}
          setElements={setElements}
        />
        <InfoSpace
          infoSpace={
            {
              id: Date.now(),
              slideElement: mainElement,
            }
          }
          mainElement={mainElement}
          onUpdateElement={updateElement}
        />
      </div>
    </div>
  )
}