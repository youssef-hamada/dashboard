import React from "react";
import styles from "@/app/ui/login/login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="Email" className={styles.email} />
        <input
          type="password"
          placeholder="password"
          className={styles.password}
        />
        <button className={styles.button}>login</button>
      </form>
    </div>
  );
};

export default LoginPage;
