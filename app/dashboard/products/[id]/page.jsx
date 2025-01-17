import React from "react";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
import { updateProduct } from "@/app/lib/util/actions";
import { fetchProduct } from "@/app/lib/util/data";

const page = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

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
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <label htmlFor="">Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label htmlFor="">price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label htmlFor="">Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label htmlFor="">Color</label>
          <input type="text" name="color" placeholder={product.color} />
          <label htmlFor="">size</label>
          <input type="text" name="size" placeholder={product.size} />
          <label htmlFor="">Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computer</option>
          </select>
          <label htmlFor="desc">Description</label>
          <textarea name="desc" id="desc" placeholder={product.desc}></textarea>
          <button className={styles.button}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default page;
