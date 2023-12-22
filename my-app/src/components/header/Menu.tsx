import React from "react";
import styles from "./header.module.css"
import { MenuButton } from "./MenuButton"


export function Menu() {

  const saveTextToFile = (text: string, fileName: string) => {
    const a = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const saveJsonObjToFile = (obj: any, fileName: string) => {
    const text = JSON.stringify(obj);
    saveTextToFile(text, fileName);
  };

    return (
      <div className={styles.presentationMenuBar}>
        <MenuButton
          label="Создать"
          onClick={() => {
            console.log("Pressed button <<Создать>>");
          }}  
        />
        <MenuButton
          label="Открыть"
          onClick={() => {
            console.log("Pressed button <<Открыть>>");
          }}  
        />
        <MenuButton
          label="Сохранить" 
          onClick={() => {
            console.log("Pressed button <<Сохранить>>");
            // Пример сохранения объекта JSON в файл
            const saveObj = { "a": 3 }; // Замените на данные, которые вы хотите сохранить
            saveJsonObjToFile(saveObj, "presentation.json");
          }}
        />
      </div>
    );
}  
  

