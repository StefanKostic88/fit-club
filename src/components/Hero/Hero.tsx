import Header from "../Header/Header";
import Button from "../ui/Button/Button";
import styles from "./Hero.module.css";
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
import Blur from "../ui/Blur/Blur";

const figuresData = [
  { numbers: "+ 140", info: "Expert coaches" },
  { numbers: "+ 978", info: "Members joined" },
  { numbers: "+ 50", info: "Fitness Programs" },
];

const heroTextData = [
  "Ideal Body",
  "In here we will help you to shape and build your ideal body and live up your life to fullest",
];

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Blur additionalStyle="hero-blur" />
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
      <div className={styles["right-h"]}>
        <Button
          text="Join Now"
          additionalStyles={{
            position: "absolute",
            right: "3rem",
            top: "2rem",
            color: " #000",
          }}
        />

        <div className={styles["heart-rate"]}>
          <img src={Heart} alt="heart-rate-image" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        <img
          src={hero_image}
          alt="hero image"
          className={styles["hero-image"]}
        />
        <img
          src={hero_image_back}
          alt="hero image black"
          className={styles["hero-image-back"]}
        />

        <div className={styles.calories}>
          <img src={Calories} alt="calories" />
          <div>
            <span>Callories Burned</span>
            <span>220 kcl</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
