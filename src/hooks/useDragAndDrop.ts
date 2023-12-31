// import {
//   RefObject,
//   useEffect,
//   useState,
// }
//   from "react"
// import { Point } from '~/model/types'

// export const useDragAndDrop = (
//   elementRef: RefObject<HTMLDivElement>,
//   initPosition: Point,
//   enabled?: boolean
// ) => {
//   const [position, setPosition] = useState<Point>(initPosition)

//   let startDragX = 0
//   let startDragY = 0

//   // useEffect(() => {
//   //   if (elementRef.current)
//   //     elementRef.current.addEventListener('mousedown', dragHandler)
//   //   return () => {
//   //     if (elementRef.current)
//   //       elementRef.current.removeEventListener('mousedown', dragHandler)
//   //   }
//   // })

//   const dragHandler = (e: MouseEvent) => {
//     startDragX = e.clientX
//     startDragY = e.clientY

//     document.addEventListener('mousemove', onMove)
//     document.addEventListener('mouseup', onStop)
//   }

//   const onMove = (e: MouseEvent) => {
//     const newX = position.x - startDragX + e.clientX
//     const newY = position.y - startDragY + e.clientY
//     enabled && setPosition({
//       x: newX,
//       y: newY,
//     })
//   }

//   const onStop = () => {
//     startDragX = 0
//     startDragY = 0

//     document.removeEventListener('mousemove', onMove)
//     document.removeEventListener('mouseup', onStop)
//   }

//   return position
// }