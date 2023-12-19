import { ActionButton } from "./ActionButton"
import styles from "./Action.module.css"

export function Actions (){
    return (
        <div className= { styles.actionBar }>
            <div className= {styles.actionMain}>
                <ActionButton 
                    label = "Добавить слайд"
                    icon = "add"
                />
                <ActionButton
                    label = "delete"
                    icon = "delete"  
                />
            </div>
            <ActionButton
                label = ""
                icon = "arrow_back_ios"
            />
            <ActionButton
                label = ""
                icon = "arrow_forward_ios"
            />
            <ActionButton
                label = ""
                icon = "text_fields"
            />
            <ActionButton
                label = ""
                icon = "add_to_photos"
            />
            <ActionButton
                label = ""
                icon = "category"
            />
            <ActionButton
                icon = "imagesearch_roller"
            />
        </div>
    )
}