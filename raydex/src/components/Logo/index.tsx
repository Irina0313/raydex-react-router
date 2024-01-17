import { Link } from "react-router-dom";
import styles from "./logo.module.scss";

const Logo = () => {
  return (
    <Link to={"/"} className={styles.logoLink}>
      <img src="/Raydex_logo.png" alt="Logo image" width="256" height="97" />
    </Link>
  );
};

export default Logo;
