import { FC } from 'react'
import { Field } from './Field'
import styles from './Field.module.css'

interface FieldInputProps {
  label?: string;
  type?: 'text' | 'number';
  value?: string;
  onChange?: (value: string) => void;
}

export const FieldInput: FC<FieldInputProps> = ({
  label, type, value, onChange,
}: FieldInputProps): JSX.Element => {
  return (
    <Field label={label + ' (px)'}>
      <input
        className={styles.fieldInput}
        type={type}
        value={value}
        onChange={(e) => { onChange && onChange(e.target.value)}}
      />
    </Field>
  )
}
