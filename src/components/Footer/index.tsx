import styles from "./styles.module.scss";

const PRODUCT_OWNER = "owner_name";
const BUILDER_NAME = "L.A. Solutions";

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
          Todos los derechos reservados por {PRODUCT_OWNER} - Built by{" "}
          <a
            href={"https://www.linkedin.com/company/81790558/"}
            target="_blank"
          >
            {BUILDER_NAME}
          </a>
        </p>
      </div>
    </>
  );
}

export default Footer;
