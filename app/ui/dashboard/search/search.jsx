"use client";

import React from "react";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
// import { useRouter } from "next/router";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);

    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }

    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <MdSearch />
        <input
          type="text"
          className={styles.input}
          placeholder={placeholder}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default Search;
