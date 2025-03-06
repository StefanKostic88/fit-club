import styles from "./Plans.module.css";
import { plansData } from "../../data/plansData";
import CustomHeader from "../ui/CustomHeader/CustomHeader";
import Button from "../ui/Button/Button";
import whitTick from "../../assets/whiteTick.png";
import Blur from "../ui/Blur/Blur";

const data = ["Ready to Start", "Your Journey", "Now with us"];

const Plans = () => {
  return (
    <div className={styles["plans-container"]}>
      <Blur additionalStyle="plans-blur-1" />
      <Blur additionalStyle="plans-blur-2" />
      <CustomHeader data={data} additionalParentStyles={{ gap: "2rem" }} />

      <div className={styles.plans}>
        {plansData.map(({ icon, name, price, features }, planIndex) => (
          <div key={planIndex} className={styles.plan}>
            {icon}
            <span>{name}</span>
            <span>$ {price}</span>

            <div className={styles.features}>
              {features.map((feature, featureIndex) => (
                <div key={featureIndex} className={styles.feature}>
                  <img src={whitTick} alt="tick" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits </span>
            </div>
            <Button
              text="Join now"
              additionalStyles={planIndex === 1 ? { color: "orange" } : null}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
