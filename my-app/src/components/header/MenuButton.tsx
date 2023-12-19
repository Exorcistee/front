import styles from "./MenuButton.module.css";

type Props = {
  label: string;
  icon?: string;
};

export function MenuButton({ label, icon }: Props) {
  return (
    <div className={styles.menuButton}>
      {label}
    </div>
  );
}