"use client";
import clsx from "clsx";
import styles from "./Cards1.module.css";
import React from "react";

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
            <img src="/images/Arrow1.svg" alt="" />
            <img src="/images/Arrow2.svg" alt="" />
          </div>
        </div>
      </div>

      <div className={clsx(styles.cards1, styles.container)}>
        <div className={styles.card}>
          <img src="/images/small-Phone.svg" alt="" />
          <p>Phones</p>
        </div>
        <div className={styles.card}>
          <img src="/images/small-Phone.svg" alt="" />
          <p>Phones</p>
        </div>
        <div className={styles.card}>
          <img src="/images/small-Phone.svg" alt="" />
          <p>Phones</p>
        </div>
        <div className={styles.card}>
          <img src="/images/small-Phone.svg" alt="" />
          <p>Phones</p>
        </div>
        <div className={styles.card}>
          <img src="/images/small-Phone.svg" alt="" />
          <p>Phones</p>
        </div>
        <div className={styles.card}>
          <img src="/images/small-Phone.svg" alt="" />
          <p>Phones</p>
        </div>
      </div>
    </div>
  );
}

export default Cards1;
