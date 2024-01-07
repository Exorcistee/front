import {
  FC,
  useState,
} from 'react'
import { FieldInput } from '../field/FieldInput'
import { FieldRadio } from '../field/FieldRadio'
import { FieldSelect } from '../field/FieldSelect'
import { IText } from '~/model/project/slide/element/Text'
import { Size } from '~/model/base/Size'
import styles from './Form.module.css'

interface TextFormProps {
  element: IText;
  id: string;
  onFormChange: (updatedData: Partial<IText>) => void;
}

export const TextForm: FC<TextFormProps> = (props: TextFormProps): JSX.Element => {

  const [height, setHeight] = useState(props.element.size.height)
  const [width, setWidth] = useState(props.element.size.width)
  const [fontFamily, setFontFamily] = useState(props.element.font.family)
  const [bold, setBold] = useState(props.element.font.bold ?? false)
  const [italic, setItalic] = useState(props.element.font.italic ?? false)
  const [underline, setUnderLine] = useState(props.element.font.underline ?? false)
  const [colorText, setColorText] = useState(props.element.font.color)
  const [sizeText, setSizeText] = useState(props.element.font.size)
  const [text, setText] = useState(props.element.text)

  const russianToEnglishColor = (color: string): string => {
    const colorsMap: Record<string, string> = {
      'белый': 'white',
      'желтый': 'yellow',
      'зеленый': 'green',
      'красный': 'red',
      'оранжевый': 'orange',
      'розовый': 'pink',
      'серый': 'grey',
      'синий': 'blue',
      'фиолетовый': 'purple',
      'черный': 'black',
    }

    return colorsMap[color]
  }

  const handleHeightChange = (newHeight: number) => {
    setHeight(newHeight)
    props.onFormChange({
      ...props.element,
      size: new Size(newHeight, props.element.size.width),
    })
  }

  const handleTextChange = (newText: string) => {
    setText(newText)
    props.onFormChange({
      ...props.element,
      text: newText,
    })
  }

  const handleWidthChange = (newWidth: number) => {
    setWidth(newWidth)
    props.onFormChange({
      ...props.element,
      size: new Size(props.element.size.height, newWidth),
    })
  }

  const handleSizeChange = (newSize: number) => {
    setSizeText(newSize)
    props.onFormChange({
      ...props.element,
      font: {
        bold: bold,
        color: colorText,
        family: fontFamily,
        italic: italic,
        size: newSize,
        underline: underline,
      },
    })
  }

  const handleFontChange = (newFont: string) => {
    setFontFamily(newFont)
    props.onFormChange({
      ...props.element,
      font: {
        bold: bold,
        color: colorText,
        family: newFont,
        italic: italic,
        size: sizeText,
        underline: underline,
      },
    })
  }

  const handleBoldChange = (newBold: boolean) => {
    setBold(newBold)
    props.onFormChange({
      ...props.element,
      font: {
        bold: newBold,
        color: colorText,
        family: fontFamily,
        italic: italic,
        size: sizeText,
        underline: underline,
      },
    })
  }

  const handleUnderlineChange = (newUnderline: boolean) => {
    setUnderLine(newUnderline)
    props.onFormChange({
      ...props.element,
      font: {
        bold: bold,
        color: colorText,
        family: fontFamily,
        italic: italic,
        size: sizeText,
        underline: newUnderline,
      },
    })
  }

  const handleColorTextChange = (newColor: string) => {
    setColorText(newColor)
    props.onFormChange({
      ...props.element,
      font: {
        bold: bold,
        color: russianToEnglishColor(newColor),
        family: fontFamily,
        italic: italic,
        size: sizeText,
        underline: underline,
      },
    })
  }

  const handleItalicChange = (newItalic: boolean) => {
    setItalic(newItalic)
    props.onFormChange({
      ...props.element,
      font: {
        bold: bold,
        color: colorText,
        family: fontFamily,
        italic: newItalic,
        size: sizeText,
        underline: underline,
      },
    })
  }

  return (
    <div className={styles.form}>
      <div className={styles.headerForm}>
        <span className={styles.headerFormTitle}>Текст</span>
      </div>
      <div className={styles.card}>
        <FieldInput
          label={'Высота'}
          type={'number'}
          value={(height).toString()}
          onChange={(newHeight) => {handleHeightChange(parseFloat(newHeight))
          }}
        />
        <FieldInput
          label={'Ширина'}
          type={'number'}
          value={(width).toString()}
          onChange={(newWidth) => {handleWidthChange(parseFloat(newWidth))
          }}
        />
      </div>
      <div className={styles.line}></div>
      <div className={styles.card}>
        <FieldInput
          label={'Текст'}
          type={'text'}
          value={text}
          onChange={(newText) => {handleTextChange(newText)
          }}
        />
        <FieldSelect
          items={['Arial', 'Roboto', 'Open Sans']}
          label={'Шрифт'}
          value={(fontFamily).toString()}
          onChange={(newFont) => {handleFontChange(newFont)
          }}
        />
        <FieldSelect
          items={[
            'красный',
            'оранжевый',
            'желтый',
            'зеленый',
            'голубой',
            'синий',
            'фиолетовый',
            'розовый',
            'белый',
            'черный',
          ]}
          label={'Цвет'}
          value={colorText}
          onChange={(newColor) => {handleColorTextChange(newColor)
          }}
        />
        <FieldInput
          label={'Размер'}
          type={'number'}
          value={(sizeText).toString()}
          onChange={(newSize) => {handleSizeChange(parseFloat(newSize))
          }}
        />
        <FieldRadio
          label={'Жирный'}
          value={bold}
          onChange={(e) => {
            handleBoldChange(e.target.checked)
          }}
        />
        <FieldRadio
          label={'Подчеркнутый'}
          value={underline}
          onChange={(e) => {
            handleUnderlineChange(e.target.checked)
          }}
        />
        <FieldRadio
          label={'Курсивный'}
          value={italic}
          onChange={(e) => {
            handleItalicChange(e.target.checked)
          }}
        />
      </div>
    </div>
  )
}
