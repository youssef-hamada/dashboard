import React from "react";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={"/noavatar.png"}
            className={styles.userImg}
            fill
            alt="user"
          />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="">Username</label>
          <input type="text" name="username" placeholder="john doe" />
          <label htmlFor="">email</label>
          <input type="email" name="email" placeholder="john-doe@gmail.com" />
          <label htmlFor="">password</label>
          <input type="password" name="password" placeholder="password" />
          <label htmlFor="">Phone</label>
          <input type="text" name="phone" placeholder="phone" />
          <label htmlFor="">Address</label>
          <input type="text" name="address" placeholder="address" />
          <label htmlFor="">isAdmin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label htmlFor="">isActive?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button className={styles.button}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default page;
