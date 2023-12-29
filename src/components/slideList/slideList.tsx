import style from './slideList.module.css'
import { MiniSlide } from './mini-slide'

export function slideList() {
  return (
    <div className= {style.slideList}>
      <div>
        <MiniSlide />
        <MiniSlide />
      </div>
    </div>
  )
}

export default slideList
