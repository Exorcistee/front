import { FC } from 'react'
import styles from './RadioButton.module.css'

interface RadioButtonProps {
  checked?: boolean;
  onChecked?: () => void;
}

export const RadioButton: FC<RadioButtonProps> =({
  checked, onChecked,
}: RadioButtonProps): JSX.Element => {
  return (
    <div
      className={`${styles.radioButton} ${checked && styles.checked}`}
      onClick={onChecked}
    >
      {checked && <span className={styles.checkMark}></span>}
    </div>
  )
}
