import styles from "./styles.module.scss";

const owner_name = "owner_name";
const developer_name = "developer_name";
const designer_name = "designer_name";

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftElement}>
          <h3>Left element</h3>
        </div>
        <div className={styles.rightElement}>
          <h3>Right element</h3>
        </div>
      </div>
      <div className={styles.reservedRights}>
        <p>
          All rights reserved by {owner_name} - Powered by {developer_name} -
          Designed by {designer_name}
        </p>
      </div>
    </>
  );
}

export default Footer;
