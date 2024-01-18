import { Link } from 'react-router-dom';
import styles from './style.module.scss';

interface ILinkButton {
  url: string;
  text: string;
}

export const LinkButton = ({ url, text }: ILinkButton) => {
  return (
    <div className={styles.button}>
      <Link to={url} className={styles.link}>
        {text}
      </Link>
    </div>
  );
};
