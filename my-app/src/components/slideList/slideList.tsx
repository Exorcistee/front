import style from "./slideList.module.css"
import { MiniSlide } from "./miniSlide"

export function slideList() {
    return (
            <div className= {style.slideList}>
                <div>
                    <MiniSlide />
                </div>
            </div>
    )
}

export default slideList;
