import styles from "./styles.module.scss";

function SectionTemplate({ bgColor, children }) {
  return (
    <div className={styles.container} style={{ backgroundColor: `${bgColor}` }}>
      {children}
    </div>
  );
}

export default SectionTemplate;
