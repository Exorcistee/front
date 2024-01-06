import { FC } from 'react'
import { Field } from './Field'
import { RadioButton } from '../element/RadioButton'

interface FieldRadioProps {
  label?: string;
  checked?: boolean;
  onChange?: () => void;
}

export const FieldRadio: FC<FieldRadioProps> = ({
  label,
  checked,
  onChange,
}: FieldRadioProps): JSX.Element => {
  return (
    <Field label={label}>
      <RadioButton
        checked={checked}
        onChecked={onChange}
      />
    </Field>
  )
}
