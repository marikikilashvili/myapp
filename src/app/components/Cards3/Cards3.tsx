"use client";
import clsx from "clsx";
import styles from "./Cards3.module.css";
import React from "react";

type Props = {};

function Cards3({}: Props) {
  return (
    <>
      <p className={clsx(styles.discounts, styles.container)}>
        Discounts up to -50%
      </p>
      <div className={clsx(styles.cards3, styles.container)}>
        <div className={styles.card2}>
          <img className={styles.phone3} src="/images/phone4.png" alt="" />
          <p className={styles.apple}>
            Apple iPhone 14 Pro 512GB <br />
            Gold (MQ233)
          </p>
          <p className={styles.dollar}>$900</p>
          <button className={styles["buyNow"]}>Buy Now</button>
          <img className={styles.heart} src="/images/Like.svg" alt="" />
        </div>
        <div className={styles.card2}>
          <img className={styles.phone3} src="/images/phone4.png" alt="" />
          <p className={styles.apple}>
            Apple iPhone 14 Pro 512GB <br />
            Gold (MQ233)
          </p>
          <p className={styles.dollar}>$900</p>
          <button className={styles["buyNow"]}>Buy Now</button>
          <img className={styles.heart} src="/images/Like.svg" alt="" />
        </div>
        <div className={styles.card2}>
          <img className={styles.phone3} src="/images/phone4.png" alt="" />
          <p className={styles.apple}>
            Apple iPhone 14 Pro 512GB <br />
            Gold (MQ233)
          </p>
          <p className={styles.dollar}>$900</p>
          <button className={styles["buyNow"]}>Buy Now</button>
          <img className={styles.heart} src="/images/Like.svg" alt="" />
        </div>
        <div className={styles.card2}>
          <img className={styles.phone3} src="/images/phone4.png" alt="" />
          <p className={styles.apple}>
            Apple iPhone 14 Pro 512GB <br />
            Gold (MQ233)
          </p>
          <p className={styles.dollar}>$900</p>
          <button className={styles["buyNow"]}>Buy Now</button>
          <img className={styles.heart} src="/images/Like.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Cards3;
