import {
  FC,
  useState,
} from 'react'
import { IForm } from '~/model/project/form/Form'
import { IImage } from '~/model/project/slide/element/Image'
import { IText } from '~/model/project/slide/element/Text'
import { ImageForm } from '../form/element/ImageForm'
import { SlideElementEnum } from '~/model/project/slide/element/SlideElementEnum'
import { TextForm } from '../form/element/TextForm'
import styles from './InfoSpace.module.css'

interface InfoSpaceProps {
  infoSpace: IForm;
}

export const InfoSpace: FC<InfoSpaceProps> = (props: InfoSpaceProps): JSX.Element => {
  const [infoSpace, __] = useState<IForm>(props.infoSpace)
  const formType = infoSpace.slideElement.type

  return (
    <div className={styles['info-panel']}>
      {formType === SlideElementEnum.Text && (
        <TextForm
          element={infoSpace as unknown as IText}
          id={`${infoSpace.id}`}
        />
      )}
      {formType === SlideElementEnum.Image && (
        <ImageForm
          element={infoSpace as unknown as IImage}
          id={`${infoSpace.id}`}
        />
      )}
      {(formType === SlideElementEnum.Rectangle
      || formType === SlideElementEnum.Circle
      || formType === SlideElementEnum.Triangle) && (
        <ImageForm
          element={infoSpace as unknown as IImage}
          id={`${infoSpace.id}`}
        />
      )}
    </div>
  )
}
