import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Youssef Hamada</div>
      <div className={styles.text}>All rights reserved to me ^_^</div>
    </div>
  );
};

export default Footer;
