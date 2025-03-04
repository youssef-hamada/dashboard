"use client";

import React from "react";
import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const Item_per_Page = 2;

  let hasPrev = Item_per_Page * (parseInt(page) - 1) > 0;
  let hasNext = Item_per_Page * (parseInt(page) - 1) + Item_per_Page < count;

  const handleChangePage = (type) => {
    if (type === "prev") {
      params.set("page", parseInt(page) - 1);
    } else {
      params.set("page", parseInt(page) + 1);
    }
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button}`}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
