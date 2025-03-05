import styles from "./Plans.module.css";
import { plansData } from "../../data/plansData";
import CustomHeader from "../ui/CustomHeader/CustomHeader";

const data = ["Ready to Start", "Your Journey", "Now with us"];

const Plans = () => {
  return (
    <div className={styles["plans-container"]}>
      <CustomHeader data={data} additionalParentStyles={{ gap: "2rem" }} />

      <div className={styles.plans}>
        {plansData.map(() => (
          <div className={styles.plan}></div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
