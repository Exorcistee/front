import React from "react";
import styles from "./header.module.css"
import { MenuButton } from "./MenuButton"



    
export function Menu() {
    return (
      <div className={styles.presentationMenuBar}>
        <MenuButton
          label="Создать" 
        />
        <MenuButton
          label="Открыть"  
        />
        <MenuButton
          label="Сохранить" 
        />
      </div>
    );
    }  
  

