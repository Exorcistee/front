import {
  ChangeEvent,
  FC,
} from 'react'
import { Field } from './Field'
import styles from './Field.module.css'

interface FieldSelectProps {
  label?: string;
  items?: string[];
  onChange?: (color: string) => void;
  value?: string;
}

export const FieldSelect: FC<FieldSelectProps> = ({
  label, items, onChange,
}: FieldSelectProps): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedColor = event.target.value
    onChange?.(selectedColor)
  }

  return (
    <Field label={label}>
      <select
        className={styles.fieldSelect}
        onChange={handleChange}
      >
        <option>Не выбрано</option>
        {items?.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </Field>
  )
}
