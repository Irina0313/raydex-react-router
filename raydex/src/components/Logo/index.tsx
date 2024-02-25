import { Link } from 'react-router-dom';
import styles from './logo.module.scss';

const Logo = () => {
  return (
    <Link to={'/'} className={styles.logoLink}>
      <img src="/logo.png" alt="Logo image" />
      <span className={styles.logoText}>
        ключ к вашей радиационной безопасности
      </span>
    </Link>
  );
};

export default Logo;
