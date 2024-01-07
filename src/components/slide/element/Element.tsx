import {
  FC,
  useEffect,
  useRef,
  useState,
} from 'react'
import { IBaseSlideShape } from '~/model/project/slide/element/shape/BaseSlideShape'
import { IImage } from '~/model/project/slide/element/Image'
import { IText } from '~/model/project/slide/element/Text'
import { ImageElement } from './image/ImageElement'
import { ShapeElement } from './shape/ShapeElement'
import { SlideElementAll } from '~/components/editor/Editor'
import { SlideElementEnum } from '~/model/project/slide/element/SlideElementEnum'
import { TextElement } from './text/TextElement'
import styles from './Element.module.css'

interface SlideElementProps {
  element: SlideElementAll;
  setElements: React.Dispatch<React.SetStateAction<SlideElementAll[]>>;
  selectedElements: string[];
  selectElements: (idElement: string) => void;
}

const _SHAPES = [
  SlideElementEnum.Circle,
  SlideElementEnum.Rectangle,
  SlideElementEnum.Triangle,
]

export const SlideElement: FC<SlideElementProps> = ({
  element, setElements, selectElements, selectedElements,
}: SlideElementProps): JSX.Element => {

  const [position, setPosition] = useState({
    x: element.position.x,
    y: element.position.y,
  })

  const isSelected = selectedElements.includes(element.id)
  const ref = useRef<HTMLDivElement>(null)
  const refCont = useRef<HTMLDivElement>(null)
  const isClicked = useRef<boolean>(false)

  const coords = useRef<{
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({
    lastX: 0,
    lastY: 0,
    startX: element.position.x,
    startY: element.position.y,
  })

  useEffect(() => {
    if (!ref.current || !refCont.current) return

    const box = ref.current

    const onMouseDown = (e: MouseEvent) => {

      if (!ref.current) return
      const clickedElement = e.target as HTMLElement
      const isClickInsideElement = ref.current.contains(clickedElement)

      if (isClickInsideElement) {
        if (e.ctrlKey) {
          selectElements(element.id)
          return
        }
        isClicked.current = true
        coords.current.startX = e.clientX - coords.current.lastX
        coords.current.startY = e.clientY - coords.current.lastY
      }
    }

    const onMouseUp = () => {
      if (!ref.current) return
      isClicked.current = false

      const newX = parseFloat(box.style.left)
      const newY = parseFloat(box.style.top)

      setPosition({
        x: newX,
        y: newY,
      })

      setElements(prevElements =>
        prevElements.map(el =>
          el.id === element.id ? {
            ...el,
            position: {
              x: newX,
              y: newY,
            },
          } : el
        )
      )
      coords.current.lastX = newX
      coords.current.lastY = newY
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      if (!isClicked.current) return

      const nextX = e.clientX - coords.current.startX + position.x
      const nextY = e.clientY - coords.current.startY + position.y

      box.style.left = `${nextX}px`
      box.style.top = `${nextY}px`
    }

    box.addEventListener('mousedown', onMouseDown)
    box.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mousemove', onMouseMove)

    const cleanup = () => {
      box.removeEventListener('mousedown', onMouseDown)
      box.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mousemove', onMouseMove)
    }

    return cleanup

  }, [element, position, setElements, selectElements])

  const style = {
    boxShadow: isSelected ? '0px 0px 0 1px orange' : 'none',
    height: `${element.size.height}px`,
    left: `${position.x}px`,
    top: `${position.y}px`,
    width: `${element.size.width}px`,
    ...(element.type === SlideElementEnum.Text && {
      color: (element as IText).font.color,
      fontFamily: (element as IText).font.family,
      fontSize: `${(element as IText).font.size}px`,
      fontStyle: (element as IText).font.italic ? 'italic' : 'normal',
      fontWeight: (element as IText).font.bold ? 'bold' : 'normal',
      height: `${(element as IText).font.size}px`,
      textDecoration: (element as IText).font.underline ? 'underline' : 'none',
      width: `${(element as IText).font.size}px`,
    }),
  }

  if (element.type === SlideElementEnum.Text) {
    return (
      <div
        ref={refCont}
        className={styles.contanier}
      >
        <div
          ref={ref}
          className={styles.box}
          style={style}
        >
          <TextElement
            key={element.id}
            text ={element as IText}
          />
        </div>
      </div>
    )
  }

  if (_SHAPES.includes(element.type)) {
    return (
      <div
        ref={refCont}
        className={styles.contanier}
      >
        <div
          ref={ref}
          className={styles.box}
          style={style}
        >
          <ShapeElement shape={element as IBaseSlideShape} />
        </div>
      </div>
    )
  }

  if (element.type === SlideElementEnum.Image) {
    return (
      <div
        ref={refCont}
        className={styles.contanier}
      >
        <div
          ref={ref}
          className={styles.box}
          style={style}
        >
          <ImageElement image={element as IImage} />
        </div>
      </div>
    )
  }

  return (
    <></>
  )
}
