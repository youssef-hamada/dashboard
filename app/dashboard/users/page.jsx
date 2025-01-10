import React from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const Users = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"search for a user..."} />
        <Link href={"users/add"}>
          <button className={styles.addBtn}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
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
                John Doe
              </div>
            </td>
            <td>Email@gmail.com</td>
            <td>12.2.2024</td>
            <td>Admin</td>
            <td>Active</td>
            <td>no Actions till now</td>
            <td>
              <div className={styles.buttons}>
                <Link href={"/"}>
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
                John Doe
              </div>
            </td>
            <td>Email@gmail.com</td>
            <td>12.2.2024</td>
            <td>Admin</td>
            <td>Active</td>
            <td>no Actions till now</td>
            <td>
              <div className={styles.buttons}>
                <Link href={"/"}>
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
                John Doe
              </div>
            </td>
            <td>Email@gmail.com</td>
            <td>12.2.2024</td>
            <td>Admin</td>
            <td>Active</td>
            <td>no Actions till now</td>
            <td>
              <div className={styles.buttons}>
                <Link href={"/"}>
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
                John Doe
              </div>
            </td>
            <td>Email@gmail.com</td>
            <td>12.2.2024</td>
            <td>Admin</td>
            <td>Active</td>
            <td>no Actions till now</td>
            <td>
              <div className={styles.buttons}>
                <Link href={"/"}>
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

export default Users;
