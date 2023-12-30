import { FC } from 'react'
import { MenuButton } from './MenuButton'
import styles from './Menu.module.css'

interface MenuProps {}

export const Menu: FC<MenuProps> = (_: MenuProps): JSX.Element => {
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
    <div className={styles['presentation-menu-bar']}>
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
