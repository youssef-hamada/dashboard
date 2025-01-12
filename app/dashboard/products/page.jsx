import React from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"search for a product..."} />
        <Link href={"products/add"}>
          <button className={styles.addBtn}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Created At</td>
            <td>Price</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt="user"
                  width={40}
                  height={40}
                  className={styles.userImg}
                />
                Car
              </div>
            </td>
            <td>BMW</td>
            <td>12.2.2024</td>
            <td>Rent</td>
            <td>Used</td>
            <td>not available</td>
            <td>
              <div className={styles.buttons}>
                <Link href={"products/1"}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <Link href={"/"}>
                  <button className={`${styles.button} ${styles.del}`}>
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt="user"
                  width={40}
                  height={40}
                  className={styles.userImg}
                />
                Motorcycle
              </div>
            </td>
            <td>BMW</td>
            <td>12.2.2024</td>
            <td>Rent</td>
            <td>Used</td>
            <td>not available</td>
            <td>
              <div className={styles.buttons}>
                <Link href={"products/1"}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <Link href={"/"}>
                  <button className={`${styles.button} ${styles.del}`}>
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt="user"
                  width={40}
                  height={40}
                  className={styles.userImg}
                />
                RV
              </div>
            </td>
            <td>BMW</td>
            <td>12.2.2024</td>
            <td>Rent</td>
            <td>Used</td>
            <td>not available</td>
            <td>
              <div className={styles.buttons}>
                <Link href={"products/1"}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <Link href={"/"}>
                  <button className={`${styles.button} ${styles.del}`}>
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt="user"
                  width={40}
                  height={40}
                  className={styles.userImg}
                />
                SUV
              </div>
            </td>
            <td>BMW</td>
            <td>12.2.2024</td>
            <td>Rent</td>
            <td>Used</td>
            <td>not available</td>
            <td>
              <div className={styles.buttons}>
                <Link href={"products/1"}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <Link href={"/"}>
                  <button className={`${styles.button} ${styles.del}`}>
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Products;
