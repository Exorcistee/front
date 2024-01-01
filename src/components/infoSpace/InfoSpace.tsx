import {
  FC,
  useState,
} from 'react'
import { IForm } from '~/model/project/form/Form'
import styles from './InfoSpace.module.css'

interface InfoSpaceProps {
  infoSpace: IForm[];
}

export const InfoSpace: FC<InfoSpaceProps> = (_: InfoSpaceProps): JSX.Element => {
  const [formList, __] = useState<IForm[]>([])

  return (
    <div className={styles['info-panel']}>
      {formList.map(form => {
        return (
          <Form slideElement={ form } />
        )
      })}
    </div>
  )
}
