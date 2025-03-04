import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  additionalStyles?: { [key: string]: string };
}

const Button = ({ text, additionalStyles }: ButtonProps) => {
  return (
    <button className={`${styles.btn}`} style={additionalStyles}>
      {text}
    </button>
  );
};

export default Button;
