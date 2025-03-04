import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return <button className={styles.btn}>{text}</button>;
};

export default Button;
