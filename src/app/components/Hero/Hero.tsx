import clsx from "clsx";
import styles from "./Hero.module.css";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className={styles.hero}>
      <div className={clsx(styles.container, styles.heroo)}>
        <div className={styles.hero1}>
          <p className={styles.proBeyond}>Pro.Beyond.</p>
          <h1 className={styles.h1}>
            IPhone 14 <span className={styles.pro}>Pro</span>
          </h1>
          <p className={styles.createdP}>
            Created to change everything for the better. For everyone
          </p>
          <button className={styles.shopNow}>Shop Now</button>
        </div>
        <div className={styles.hero2}>
          <img className={styles.phone} src="/images/phone.png" alt="" />
          <img className={styles.phoneCut} src="/images/phone-cut.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
