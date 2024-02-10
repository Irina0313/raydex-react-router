import { Link } from 'react-router-dom';
import styles from './logo.module.scss';

const Logo = () => {
  return (
    <Link to={'/'} className={styles.logoLink}>
      <img src="/Raydex_logo.png" alt="Logo image" />
    </Link>
  );
};

export default Logo;
