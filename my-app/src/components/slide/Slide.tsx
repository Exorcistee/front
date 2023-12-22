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
                <img src = "https://img.freepik.com/free-photo/reflection-of-rocky-mountains-and-sky-on-beautiful-lake_23-2148153610.jpg?w=996&t=st=1703279081~exp=1703279681~hmac=d677c850c4eeb815652077e92f977eef5df026e8626ae3249065b6a5fdb04f34" width = "100" height = "100" alt = "фото"></img>
                
        </div>
    )
}