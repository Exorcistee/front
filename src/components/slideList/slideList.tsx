import style from './slideList.module.css'
import { MiniSlide } from './MiniSlide'

export function slideList() {
  return (
    <div className= {style.slideList}>
        <MiniSlide />
        <MiniSlide />
    </div>
  )
}

export default slideList
