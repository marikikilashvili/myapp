"use client";
import clsx from "clsx";
import styles from "./Wreli.module.css";
import React from "react";

type Props = {};

function Wreli({}: Props) {
  return (
    <div className={styles.wreli}>
      <img className={styles.img} src="/images/background.png" alt="" />
      <div className={styles["inBackground"]}>
        <p className={styles.big}>
          Big Summer <span className={styles.sale}>Sale</span>
        </p>
        <p className={styles.comodo}>
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <button className={styles["shopNow"]}>Shop Now</button>
      </div>
    </div>
  );
}

export default Wreli;
