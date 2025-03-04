import Header from "../Header/Header";
import Button from "../ui/Button/Button";
import styles from "./Hero.module.css";

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
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        <div className={styles.figures}>
          <div>
            <span>+140</span>
            <span>expert coatches</span>
          </div>
          <div>
            <span>+978</span>
            <span>Memebrs joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness Programs</span>
          </div>
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
