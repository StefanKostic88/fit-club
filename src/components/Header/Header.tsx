import "./Header.css";
import Logo from "../../assets/logo.png";

const headerData = ["Home", "Programs", "Why us", "Plans", "Testemonials"];

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="Logo" />
      <ul className="header-menu">
        {headerData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
