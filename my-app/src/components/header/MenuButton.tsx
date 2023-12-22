import styles from "./MenuButton.module.css";

type Props = {
  label: string;
  onClick?: () => void;
};

export function MenuButton({ label, onClick }: Props) {
  return (
    <div className={styles.menuButton} onClick={onClick}>
      {label}
    </div>
  );
}