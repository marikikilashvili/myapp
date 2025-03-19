"use client";
import clsx from "clsx";
import styles from "./Cards2.module.css";
import React from "react";

type Props = {};

function Cards2({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <p className={styles.p}>New Arrival</p>
        <p className={styles.p}>Bestseller</p>
        <p className={styles.p}>Featured Products</p>
      </div>
      <div className={styles.cards2}>
        <div className={styles.card2}>
          <img className={styles.phone3} src="/images/phone3.png" alt="" />
          <p className={styles.apple}>
            Apple iPhone 14 Pro Max <br className={styles.br} />
            128GB Deep Purple
          </p>
          <p className={styles.dollar}>$900</p>
          <button className={styles["buy-now"]}>Buy Now</button>
          <img className={styles.heart} src="/images/Like.svg" alt="Like" />
        </div>
        <div className={styles.card2}>
          <img className={styles.phone3} src="/images/phone3.png" alt="" />
          <p className={styles.apple}>
            Apple iPhone 14 Pro Max <br />
            128GB Deep Purple
          </p>
          <p className={styles.dollar}>$900</p>
          <button className={styles["buy-now"]}>Buy Now</button>
          <img className={styles.heart} src="/images/Like.svg" alt="" />
        </div>
        <div className={styles.card2}>
          <img className={styles.phone3} src="/images/phone3.png" alt="" />
          <p className={styles.apple}>
            Apple iPhone 14 Pro Max <br />
            128GB Deep Purple
          </p>
          <p className={styles.dollar}>$900</p>
          <button className={styles["buy-now"]}>Buy Now</button>
          <img className={styles.heart} src="/images/Like.svg" alt="" />
        </div>
        <div className={styles.card2}>
          <img className={styles.phone3} src="/images/phone3.png" alt="" />
          <p className={styles.apple}>
            Apple iPhone 14 Pro Max <br />
            128GB Deep Purple
          </p>
          <p className={styles.dollar}>$900</p>
          <button className={styles["buy-now"]}>Buy Now</button>
          <img className={styles.heart} src="/images/Like.svg" alt="" />
        </div>
        <div className={styles.card2}>
          <img className={styles.phone3} src="/images/phone3.png" alt="" />
          <p className={styles.apple}>
            Apple iPhone 14 Pro Max <br />
            128GB Deep Purple
          </p>
          <p className={styles.dollar}>$900</p>
          <button className={styles["buy-now"]}>Buy Now</button>
          <img className={styles.heart} src="/images/Like.svg" alt="" />
        </div>
        <div className={styles.card2}>
          <img className={styles.phone3} src="/images/phone3.png" alt="" />
          <p className={styles.apple}>
            Apple iPhone 14 Pro Max <br />
            128GB Deep Purple
          </p>
          <p className={styles.dollar}>$900</p>
          <button className={styles["buy-now"]}>Buy Now</button>
          <img className={styles.heart} src="/images/Like.svg" alt="" />
        </div>
        <div className={styles.card2}>
          <img className={styles.phone3} src="/images/phone3.png" alt="" />
          <p className={styles.apple}>
            Apple iPhone 14 Pro Max <br />
            128GB Deep Purple
          </p>
          <p className={styles.dollar}>$900</p>
          <button className={styles["buy-now"]}>Buy Now</button>
          <img className={styles.heart} src="/images/Like.svg" alt="" />
        </div>
        <div className={styles.card2}>
          <img className={styles.phone3} src="/images/phone3.png" alt="" />
          <p className={styles.apple}>
            Apple iPhone 14 Pro Max <br />
            128GB Deep Purple
          </p>
          <p className={styles.dollar}>$900</p>
          <button className={styles["buy-now"]}>Buy Now</button>
          <img className={styles.heart} src="/images/Like.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Cards2;
