import { FC } from 'react'
import styles from './RadioButton.module.css'

interface RadioButtonProps {
  checked?: boolean;
  onChecked?: (isChecked: boolean) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton: FC<RadioButtonProps> = ({
  checked, onChecked, onChange,
}: RadioButtonProps): JSX.Element => {
  return (
    <div
      aria-checked={checked}
      className={styles.radioButton}
      role="radio"
      onClick={() => {
        if (onChecked) {
          onChecked(!checked)
        }
      }}
      onChange={onChange}
    >
      <span className={styles.checkMark}></span>
    </div>
  )
}
