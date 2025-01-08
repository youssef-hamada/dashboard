import React from "react";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <MdSearch />
        <input type="text" className={styles.input} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default Search;
