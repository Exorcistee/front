import { FC } from 'react'
import styles from './Field.module.css'

interface FieldProps {
  label?: string;
  children?: React.ReactNode;
}

export const Field: FC<FieldProps> = ({
  label, children,
}: FieldProps): JSX.Element => {
  return (
    <div className={styles.field}>
      <span className={styles.fieldLabel}>{label}</span>
      <div className={styles.fieldValue}>{children}</div>
    </div>
  )
}
