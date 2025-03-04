import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
import styles from "./Programs.module.css";

const programsHeaderData = ["Explore our", "Programs", "To shape you"];

const Programs = () => {
  return (
    <div className={styles.programs} id="programs">
      <div className={styles["programs-header"]}>
        {programsHeaderData.map((header, index) => (
          <span key={index} className={index !== 1 ? "stroke-text" : ""}>
            {header}
          </span>
        ))}
      </div>

      <div className={styles["program-categories"]}>
        {programsData.map(({ image, heading, details }, index) => (
          <div key={index} className={styles.category}>
            {image}
            <span>{heading}</span>
            <span>{details}</span>
            <div className={styles["join-now"]}>
              <span>Join now </span>
              <img src={RightArrow} alt="Right Arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
