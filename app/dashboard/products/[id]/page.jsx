import React from "react";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
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
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="">Title</label>
          <input type="text" name="title" placeholder="john doe" />
          <label htmlFor="">price</label>
          <input type="number" name="price" placeholder="price" />
          <label htmlFor="">Stock</label>
          <input type="number" name="stock" placeholder="stock" />
          <label htmlFor="">Color</label>
          <input type="text" name="color" placeholder="color" />
          <label htmlFor="">size</label>
          <input type="text" name="size" placeholder="size" />
          <label htmlFor="">Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computer</option>
          </select>
          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            id="desc"
            placeholder="Desctiption..."
          ></textarea>
          <button className={styles.button}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default page;
