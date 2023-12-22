import styles from "./Element.module.css"

export function Slide () {
    return (
        <div className={styles.Slide}>
                <span>Строка</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <ellipse cx={100 / 2} cy={100 / 2} rx={100 / 2} ry={100/ 2}/>
                </svg>
                <div>
                <svg
                    
                    xmlns = "http://www.w3.org/2000/svg"
                >
                    <polygon points="60,25 140,25 160,60"/>
                </svg>
                </div>   
                <img src = "../../assets/icons/logo.png" width = "10" height = "10" alt = "фото"></img>
        </div>
    )
}