import Header from "../Header/Header";
import Button from "../ui/Button/Button";
import styles from "./Hero.module.css";
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
import Blur from "../ui/Blur/Blur";
import { motion } from "framer-motion";

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
  const transition = { type: "spring", duration: 3 };
  return (
    <div className={styles.hero}>
      <Blur additionalStyle="hero-blur" />
      <div className={styles["left-h"]}>
        <Header />
        <div className={styles["the-best-ad"]}>
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>

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

        <motion.div
          className={styles["heart-rate"]}
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
        >
          <img src={Heart} alt="heart-rate-image" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img
          src={hero_image}
          alt="hero image"
          className={styles["hero-image"]}
        />
        <motion.img
          src={hero_image_back}
          alt="hero image black"
          className={styles["hero-image-back"]}
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
        />

        <motion.div
          className={styles.calories}
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
        >
          <img src={Calories} alt="calories" />
          <div>
            <span>Callories Burned</span>
            <span>220 kcl</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
