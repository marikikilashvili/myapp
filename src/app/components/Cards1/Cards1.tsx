"use client";
import clsx from "clsx";
import styles from "./Cards1.module.css";
import React from "react";
import categories from "@/data/index.json";

type Props = {};

function Cards1({}: Props) {
  return (
    <div className={styles.grey}>
      <div className={styles.container}>
        <div className={styles["browse-arrows"]}>
          <div className={styles.browse}>
            <p>Browse By Category</p>
          </div>
          <div className={styles.arrows}>
            <img src="/images/Arrow1.svg" alt="Previous" />
            <img src="/images/Arrow2.svg" alt="Next" />
          </div>
        </div>
      </div>

      <div className={clsx(styles.cards1, styles.container)}>
        {categories.map((category) => (
          <div className={styles.card} key={category.id}>
            <img src={category.img} alt={category.name} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards1;
