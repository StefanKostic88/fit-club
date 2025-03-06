import { FC } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  additionalStyles?: { [key: string]: string } | null;
  clickHandler?: () => void;
}

const Button: FC<ButtonProps> = ({ text, additionalStyles, clickHandler }) => {
  const additionalStylesCopy = { ...additionalStyles };

  return additionalStyles ? (
    <button
      className={`${styles.btn}`}
      style={additionalStylesCopy}
      onClick={clickHandler}
    >
      {text}
    </button>
  ) : (
    <button className={`${styles.btn}`}>{text}</button>
  );
};

export default Button;
