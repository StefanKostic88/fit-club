import styles from "./Testemonials.module.css";
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testemonials = () => {
  const [selectedReview, setSelectedReview] = useState<number>(0);
  const testemonialsLength = testimonialsData.length;

  const handleLeftClick = () => {
    if (selectedReview === 0) {
      setSelectedReview(() => testemonialsLength - 1);
    } else {
      setSelectedReview((prev) => prev - 1);
    }
  };

  const handleRightClick = () => {
    if (selectedReview === testemonialsLength - 1) {
      setSelectedReview(() => 0);
    } else {
      setSelectedReview((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.testimonials}>
      <div className={styles["left-t"]}>
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <span>{testimonialsData[selectedReview].review}</span>
        <span style={{ color: "var(--orange)" }}>
          {testimonialsData[selectedReview].name}
        </span>
        - {testimonialsData[selectedReview].status}
      </div>
      <div className={styles["right-t"]}>
        <div></div>
        <div></div>
        <img src={testimonialsData[selectedReview].image} alt="" />
        <div className={styles.arrows}>
          <img onClick={handleLeftClick} src={leftArrow} alt="left arrow" />
          <img onClick={handleRightClick} src={rightArrow} alt="right arrow" />
        </div>
      </div>
    </div>
  );
};

export default Testemonials;
