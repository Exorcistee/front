import React from "react";
import styles from "./header.module.css"
import { MenuButton } from "./MenuButton"

type Props = {
  newPresentation: () => void;
  openPresentation: () => void;
  savePresentation: () => void;
};

    
export function Menu({
  newPresentation,
  openPresentation,
  savePresentation,
}: Props) {
    return (
      <div className={styles.presentationMenuBar}>
        <MenuButton
          label="Создать"
          onClick={newPresentation}
        />
        <MenuButton
          label="Открыть"
          onClick={openPresentation}  
        />
        <MenuButton
          label="Сохранить" 
          onClick={savePresentation}
        />
      </div>
    );
}  
  

