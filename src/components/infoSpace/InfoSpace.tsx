import {
  FC,
  useEffect,
} from 'react'
import { IForm } from '~/model/project/form/Form'
import { IImage } from '~/model/project/slide/element/Image'
import { IText } from '~/model/project/slide/element/Text'
import { ImageForm } from '../form/element/ImageForm'
import { SlideElementAll } from '../editor/Editor'
import { SlideElementEnum } from '~/model/project/slide/element/SlideElementEnum'
import { TextForm } from '../form/element/TextForm'
import styles from './InfoSpace.module.css'

interface InfoSpaceProps {
  infoSpace: IForm;
  mainElement: SlideElementAll;
  onUpdateElement: (updatedElement: SlideElementAll) => void;
}

export const InfoSpace: FC<InfoSpaceProps> = (props: InfoSpaceProps): JSX.Element => {
  // const [infoSpace, __] = useState<IForm>(props.infoSpace)
  const formType = props.mainElement.type

  const handleFormChange = (newData: Partial<SlideElementAll>) => {
    const updatedElement = {
      ...props.mainElement,
      ...newData,
    }
    props.onUpdateElement(updatedElement)
  }

  return (
    <div className={styles['info-panel']}>
      {formType === SlideElementEnum.Text && (
        <TextForm
          element={props.mainElement as unknown as IText}
          id={props.mainElement.id}
          onFormChange={handleFormChange}
        />
      )}
      {formType === SlideElementEnum.Image && (
        <ImageForm
          element={props.mainElement as unknown as IImage}
          id={props.mainElement.id}
          onFormChange={handleFormChange}
        />
      )}
      {(formType === SlideElementEnum.Rectangle
      || formType === SlideElementEnum.Circle
      || formType === SlideElementEnum.Triangle) && (
        <ImageForm
          element={props.mainElement as unknown as IImage}
          id={props.mainElement.id}
          onFormChange={handleFormChange}
        />
      )}
    </div>
  )
}
