import styles from './TheHeader.module.scss';
import { ThemeSwitcher } from 'components/ThemeSwitcher'


export const TheHeader = () => (
  <div className={styles.header}>
    <div className={styles.logo}>
      Dev_on_GitHub
    </div>
    <ThemeSwitcher />
  </div>
);
