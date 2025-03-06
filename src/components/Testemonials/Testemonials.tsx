import styles from "./Testemonials.module.css";
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

const Testemonials = () => {
  const transition = { type: "spring", duration: 3 };
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
    <div className={styles.testimonials} id="testemonials">
      <div className={styles["left-t"]}>
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
        <motion.span
          key={selectedReview}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selectedReview].review}
        </motion.span>
        <span style={{ color: "var(--orange)" }}>
          {testimonialsData[selectedReview].name}
        </span>
        - {testimonialsData[selectedReview].status}
      </div>
      <div className={styles["right-t"]}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>

        <motion.img
          src={testimonialsData[selectedReview].image}
          alt="testemonial image"
          key={selectedReview}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
        />
        <div className={styles.arrows}>
          <img onClick={handleLeftClick} src={leftArrow} alt="left arrow" />
          <img onClick={handleRightClick} src={rightArrow} alt="right arrow" />
        </div>
      </div>
    </div>
  );
};

export default Testemonials;
