import { ActionButton } from "./ActionButton"
import styles from "./Action.module.css"

export function Actions (){
    return (
        <div className= { styles.actionBar }>
            <div className= {styles.actionList}>
                <ActionButton 
                    label = "Добавить слайд"
                    icon = ""
                />
                <ActionButton
                    label = "Удалить слайд"
                    icon = ""  
                />
            </div>
            <ActionButton
                label = ""
                icon = ""
            />
            <ActionButton
                label = ""
                icon = ""
            />

        </div>
    )
}