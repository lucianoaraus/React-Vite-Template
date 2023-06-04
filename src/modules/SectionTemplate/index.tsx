import styles from "./styles.module.scss";

function SectionTemplate({ bgColor, content }) {
  return (
    <div className={styles.container} style={{ backgroundColor: `${bgColor}` }}>
      {content}
    </div>
  );
}

export default SectionTemplate;
