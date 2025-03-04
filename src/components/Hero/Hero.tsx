import Header from "../Header/Header";
import Button from "../ui/Button/Button";
import styles from "./Hero.module.css";

const figuresData = [
  { numbers: "+140", info: "Expert coatches" },
  { numbers: "+978", info: "Memebrs joined" },
  { numbers: "+50", info: "Fitness Programs" },
];

const heroTextData = [
  "Ideal Body",
  "In here we will help you to shape and build your ideal body and live up your life to fullest",
];

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles["left-h"]}>
        <Header />
        <div className={styles["the-best-ad"]}>
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

        <div className={styles["hero-text"]}>
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          {heroTextData.map((text, index) => (
            <div key={index}>
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div className={styles.figures}>
          {figuresData.map(({ info, numbers }, index) => (
            <div key={index}>
              <span>{numbers}</span>
              <span>{info}</span>
            </div>
          ))}
        </div>

        <div className={styles["hero-buttons"]}>
          <Button text="Get Started" />
          <Button text="Learn More" />
        </div>
      </div>
      <div className={styles["right-h"]}>SIDES</div>
    </div>
  );
};

export default Hero;
