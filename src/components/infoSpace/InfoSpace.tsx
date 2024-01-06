import { FC } from 'react'
import { IForm } from '~/model/project/form/Form'
import { IImage } from '~/model/project/slide/element/Image'
import { IText } from '~/model/project/slide/element/Text'
import { ImageForm } from '../form/element/ImageForm'
import { RootState } from '~/store/reducer/rootReducer'
import { SlideElementEnum } from '~/model/project/slide/element/SlideElementEnum'
import { TextForm } from '../form/element/TextForm'
import styles from './InfoSpace.module.css'
import { useSelector } from 'react-redux'

interface InfoSpaceProps {
  infoSpace: IForm;
}

export const InfoSpace: FC<InfoSpaceProps> = (_: InfoSpaceProps): JSX.Element => {
  const elementsList = useSelector((state: RootState) => state.elementReducer.elements)
  const selectElement = useSelector((state: RootState) => state.selectedElements)
  const selectElementId = Array.from(selectElement)[0]

  const selectedElement = elementsList.find(element => element.id === selectElementId)

  const formType = selectedElement?.type

  return (
    <div className={styles['info-panel']}>
      {selectedElement && (
        <>
          {formType === SlideElementEnum.Text && (
            <TextForm
              element={selectedElement as unknown as IText}
              id={selectedElement.id}
            />
          )}
          {formType === SlideElementEnum.Image && (
            <ImageForm
              element={selectedElement as unknown as IImage}
              id={selectedElement.id}
            />
          )}
          {(formType === SlideElementEnum.Rectangle ||
            formType === SlideElementEnum.Circle ||
            formType === SlideElementEnum.Triangle) && (
            <ImageForm
              element={selectedElement as unknown as IImage}
              id={selectedElement.id}
            />
          )}
        </>
      )}
    </div>
  )
}
