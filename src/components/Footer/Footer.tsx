import styles from "./Footer.module.css";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import logo from "../../assets/logo.png";

const imagesData = [github, linkedin, instagram].map((image, index) => (
  <img key={index} src={image} alt={`footer-image ${index + 1}`} />
));

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className={styles["footer-fontainer"]} id="footer">
      <hr />
      <div className={styles.footer}>
        <div className={styles["social-links"]}>{imagesData}</div>
        <div className={styles["logo-f"]}>
          <img src={logo} alt="logo image" />
        </div>
        <div className={styles.copy}>
          &#169; {year} The Fit Club &#183; Privacy &#183; Terms
        </div>
      </div>
    </div>
  );
};

export default Footer;
