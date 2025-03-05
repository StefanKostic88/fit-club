import styles from "./Reasons.module.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";

import tick from "../../assets/tick.png";

const imagesData = [
  { img: image1, altText: "image 1" },
  { img: image2, altText: "image 2" },
  { img: image3, altText: "image 3" },
  { img: image4, altText: "image 4" },
];

const whyToChoseData = [
  "over 140+ expert coachs",
  "train smarter and faster than before",
  "1 free program for new member",
  "reliable partners",
];

const tickData = Array.from(whyToChoseData).map((data, index) => {
  return (
    <div key={index}>
      <img src={tick} alt={`tick-${index + 1}`} />
      <span>{data}</span>
    </div>
  );
});

const partnersImagesData = Array.from([nb, adidas, nike]).map((data, index) => (
  <img key={index} src={data} alt={`partner-${index + 1}`} />
));

const Reasons = () => {
  return (
    <div className={styles.reasons} id="reasons">
      <div className={styles["left-r"]}>
        {imagesData.map(({ img, altText }, index) => (
          <img key={index} src={img} alt={altText} />
        ))}
      </div>
      <div className={styles["right-r"]}>
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why </span>
          <span>chose us?</span>
        </div>
        <div className={styles["details-r"]}>{tickData}</div>
        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          our partners
        </span>
        <div className={styles.partners}>{partnersImagesData}</div>
      </div>
    </div>
  );
};

export default Reasons;
