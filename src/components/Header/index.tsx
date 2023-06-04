import styles from "./styles.module.scss";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.leftElement}>
        <h3>Left element</h3>
      </div>
      <div className={styles.centerElement}>
        <h3>Center element</h3>
      </div>
      <div className={styles.rightElement}>
        <h3>Right element</h3>
      </div>
    </div>
  );
}

export default Header;
