import React from "react";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";

const Users = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"search for a user..."} />
        <Link href={"dashboard/users/add"}>
          <button className={styles.addBtn}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}></table>
    </div>
  );
};

export default Users;
