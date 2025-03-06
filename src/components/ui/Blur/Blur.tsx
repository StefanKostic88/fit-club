import styles from "./Blur.module.css";

interface BlurInterface {
  additionalStyle?:
    | "hero-blur"
    | "plans-blur-1"
    | "plans-blur-2"
    | "footer-blur-1"
    | "footer-blur-2"
    | "modal-blur";
}

const Blur = ({ additionalStyle }: BlurInterface) => {
  const blurStyles = additionalStyle
    ? `${styles.blur} ${styles[additionalStyle]}`.trim()
    : styles.blur;

  return <div className={blurStyles}></div>;
};

export default Blur;
