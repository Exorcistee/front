import {
  FC,
  useEffect,
  useRef,
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
  className: string;
  onClick: (event: React.MouseEvent) => void;
}

const _SHAPES = [
  SlideElementEnum.Circle,
  SlideElementEnum.Rectangle,
  SlideElementEnum.Triangle,
]

export const SlideElement: FC<SlideElementProps> = ({
  element,
  className,
  onClick,
}: SlideElementProps): JSX.Element => {

  const ref = useRef<HTMLDivElement>(null)
  const refCont = useRef<HTMLDivElement>(null)
  const isClicked = useRef<boolean>(false)

  const text: IText = {
    font: {
      color: '#ffffff',
      family: 'Arial',
      size: 12,
    },
    id: `${Date.now()}`,
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
      coords.current.startX = e.clientX
      coords.current.startY = e.clientY
    }

    const onMouseUp = () => {
      isClicked.current = false
      coords.current.lastX = box.offsetLeft
      coords.current.lastY = box.offsetTop

    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return

      const nextX = e.clientX - coords.current.startX + coords.current.lastX
      const nextY = e.clientY - coords.current.startY + coords.current.lastY

      box.style.left = `${nextX}px`
      box.style.top = `${nextY}px`
    }

    box.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mousemove', onMouseMove)

    const cleanup = () => {
      box.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mousemove', onMouseMove)
    }

    return cleanup

  }, [])

  if (element.type === SlideElementEnum.Text) {
    return (
      <div
        ref={refCont}
        className={`${styles.contanier} ${className}`}
      >
        <div
          ref={ref}
          className={`${styles.box} ${className}`}
          onClick={onClick}
        >
          <TextElement
            key={text.id}
            text = {text}
          />
        </div>
      </div>
    )
  }

  if (_SHAPES.includes(element.type)) {
    return (
      <div
        ref={refCont}
        className={`${styles.contanier} ${className}`}
      >
        <div
          ref={ref}
          className={`${styles.box} ${className}`}
          onClick={onClick}
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
        className={`${styles.contanier} ${className}`}
      >
        <div
          ref={ref}
          className={styles.box}
          onClick={onClick}
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
