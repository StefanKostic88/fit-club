import styles from "./CustomHeader.module.css";

interface CustomHeaderProps {
  data: string[];
  additionalParentStyles?: { [key: string]: string };
}

const CustomHeader = ({ data, additionalParentStyles }: CustomHeaderProps) => {
  return (
    <div className={styles["custom-header"]} style={additionalParentStyles}>
      {data.map((header, index) => (
        <span key={index} className={index !== 1 ? "stroke-text" : ""}>
          {header}
        </span>
      ))}
    </div>
  );
};

export default CustomHeader;
