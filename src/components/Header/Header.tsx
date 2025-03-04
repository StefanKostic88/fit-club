import Logo from "../../assets/logo.png";
import styles from "./Header.module.css";

const headerData = ["Home", "Programs", "Why us", "Plans", "Testemonials"];

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={Logo} alt="Logo" />
      <ul className={styles["header-menu"]}>
        {headerData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
