import React from "react";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";
import { fetchUser } from "@/app/lib/util/data";
import { updateUser } from "@/app/lib/util/actions";

const page = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={user.img || "/noavatar.png"}
            className={styles.userImg}
            fill
            alt="user"
          />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label htmlFor="">Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label htmlFor="">email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label htmlFor="">password</label>
          <input type="password" name="password" placeholder={user.password} />
          <label htmlFor="">Phone</label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label htmlFor="">Address</label>
          <input type="text" name="address" placeholder={user.address} />
          <label htmlFor="">isAdmin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={user.isAdmin}>
              No
            </option>
          </select>
          <label htmlFor="">isActive?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={user.isActive}>
              No
            </option>
          </select>
          <button className={styles.button}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default page;
