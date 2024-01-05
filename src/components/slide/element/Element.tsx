import {
  FC,
  useEffect,
  useRef,
  useState,
} from 'react'
import { IBaseSlideElement } from '~/model/project/slide/element/BaseSlideElement'
import { IBaseSlideShape } from '~/model/project/slide/element/shape/BaseSlideShape'
import { IImage } from '~/model/project/slide/element/Image'
import { IText } from '~/model/project/slide/element/Text'
import { ImageElement } from './image/ImageElement'
import { ShapeElement } from './shape/ShapeElement'
import { SlideElementEnum } from '~/model/project/slide/element/SlideElementEnum'
import { TextElement } from './text/TextElement'
import styles from './Element.module.css'

interface SlideElementProps {
  element: IBaseSlideElement;
  setElements: React.Dispatch<React.SetStateAction<IBaseSlideElement[]>>;
}

const _SHAPES = [
  SlideElementEnum.Circle,
  SlideElementEnum.Rectangle,
  SlideElementEnum.Triangle,
]

export const SlideElement: FC<SlideElementProps> = ({
  element, setElements,
}: SlideElementProps): JSX.Element => {

  const [position, setPosition] = useState({
    x: element.position.x,
    y: element.position.y,
  })

  const ref = useRef<HTMLDivElement>(null)
  const refCont = useRef<HTMLDivElement>(null)
  const isClicked = useRef<boolean>(false)

  const text: IText = {
    font: {
      color: '#ffffff',
      family: 'Arial',
      size: 12,
    },
    id: '1',
    leftTopPoint: element.leftTopPoint,
    position: element.position,
    rightBottomPoint: element.rightBottomPoint,
    size: element.size,
    text: 'default',
    type: element.type,
  }

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
      isClicked.current = true
      coords.current.startX = e.clientX - coords.current.lastX
      coords.current.startY = e.clientY - coords.current.lastY
    }

    const onMouseUp = () => {

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
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mousemove', onMouseMove)
    }

    return cleanup

  }, [setElements, element, position])

  const style = {
    left: `${position.x}px`,
    top: `${position.y}px`,
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
          <TextElement text = {text} />
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
