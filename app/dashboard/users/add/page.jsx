import React from "react";
import styles from "@/app/ui/dashboard/users/addUser/add.module.css";

const AddProduct = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input
          name="title"
          type="text"
          placeholder="name"
          className={styles.input}
          required
        />
        <input
          name="password"
          type="text"
          placeholder="password"
          className={styles.input}
          required
        />

        <input type="number" placeholder="phone" name="phone" />
        <input type="text" placeholder="email" name="email" />
        <select name="isAdmin" id="cat">
          <option value={false}>IsAdmin</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="cat">
          <option value={false}>IsActive</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows={16}
          placeholder="Address..."
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
