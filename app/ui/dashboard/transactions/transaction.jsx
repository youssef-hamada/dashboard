import React from "react";
import styles from "./transaction.module.css";
import Image from "next/image";

const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transaction</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  width={40}
                  height={40}
                  className={styles.userImg}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending} `}>
                Pending
              </span>
            </td>
            <td>14.9.2024</td>
            <td>1200$</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  width={40}
                  height={40}
                  className={styles.userImg}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done} `}>Done</span>
            </td>
            <td>14.9.2024</td>
            <td>1200$</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  width={40}
                  height={40}
                  className={styles.userImg}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled} `}>
                Cancelled
              </span>
            </td>
            <td>14.9.2024</td>
            <td>1200$</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  width={40}
                  height={40}
                  className={styles.userImg}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done} `}>Done</span>
            </td>
            <td>14.9.2024</td>
            <td>1200$</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
