import { FC } from 'react'
import { Field } from './Field'

interface FieldRadioProps {
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: boolean;
}

export const FieldRadio: FC<FieldRadioProps> = ({
  label,
  checked,
  onChange,
}: FieldRadioProps): JSX.Element => {
  return (
    <Field label={label}>
      <input
        checked={checked}
        type="checkbox"
        onChange={onChange}
      />
    </Field>
  )
}
