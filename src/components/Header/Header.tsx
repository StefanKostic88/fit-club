import Logo from "../../assets/logo.png";
import styles from "./Header.module.css";
import bars from "../../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";

const headerLabels = [
  {
    label: "Home",
    link: "hero",
  },
  {
    label: "Programs",
    link: "programs",
  },
  {
    label: "Why us",
    link: "reasons",
  },
  {
    label: "Plans",
    link: "plans",
  },
  {
    label: "Testemonials",
    link: "testemonials",
  },
];

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;

  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setMenuOpened(() => true);
  };
  const handleCloseMenu = () => {
    setMenuOpened(() => false);
  };

  const headerData = headerLabels.map(({ label, link }) => ({
    label: label,
    link: link,
    hendler: handleCloseMenu,
  }));

  const hamburgerMenu = (
    <div
      style={{
        backgroundColor: "var(--appColor)",
        padding: "0.5rem",
        borderRadius: "5px",
      }}
      onClick={handleOpenMenu}
    >
      <img
        src={bars}
        alt="menu image"
        style={{ width: "1.5rem", height: "1.5rem" }}
      />
    </div>
  );

  const list = (
    <ul className={styles["header-menu"]}>
      {headerData.map(({ label, link, hendler }, index) => (
        <li key={index}>
          <Link to={link} span={1} smooth={true} onClick={hendler}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={styles.header}>
      <img className={styles.logo} src={Logo} alt="Logo" />
      {!menuOpened && mobile ? hamburgerMenu : list}
    </div>
  );
};

export default Header;
