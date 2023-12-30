import { MenuButton } from './MenuButton'
import styles from './Menu.module.css'

export function Menu() {

  const saveTextToFile = (text: string, fileName: string) => {
    const a = document.createElement('a')
    const file = new Blob([text], { type: 'text/plain' })
    a.href = URL.createObjectURL(file)
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  const saveJsonObjToFile = (obj: unknown, fileName: string) => {
    const text = JSON.stringify(obj)
    saveTextToFile(text, fileName)
  }

  return (
    <div className={styles.presentationMenuBar}>
      <MenuButton label="Создать" />
      <MenuButton label="Открыть" />
      <MenuButton
        label="Сохранить"
        onClick={() => {
          // Пример сохранения объекта JSON в файл
          const saveObj = { 'a': 3 } // Замените на данные, которые вы хотите сохранить
          saveJsonObjToFile(saveObj, 'presentation.json')
        }}
      />
    </div>
  )
}
