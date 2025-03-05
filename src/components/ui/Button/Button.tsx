import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  additionalStyles?: { [key: string]: string } | null;
}

const Button = ({ text, additionalStyles }: ButtonProps) => {
  const additionalStylesCopy = { ...additionalStyles };

  return additionalStyles ? (
    <button className={`${styles.btn}`} style={additionalStylesCopy}>
      {text}
    </button>
  ) : (
    <button className={`${styles.btn}`}>{text}</button>
  );
};

export default Button;
