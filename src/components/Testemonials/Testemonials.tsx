import styles from "./Testemonials.module.css";

const Testemonials = () => {
  return (
    <div className={styles.testimonials}>
      <div className={styles["left-t"]}>
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span>say about us</span>
      </div>
      <div className={styles["right-t"]}></div>
    </div>
  );
};

export default Testemonials;
