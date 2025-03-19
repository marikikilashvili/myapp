"use client";
import clsx from "clsx";
import styles from "./Footer.module.css";
import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className={styles.footer}>
      <div className={clsx(styles.container, styles.futeri)}>
        <div className={styles.we}>
          <img className={styles.logo1} src="/images/Logo1.svg" alt="Logo" />
          <p>
            We are a residential interior design firm located in <br />
            Portland. Our boutique-studio offers more than
          </p>
        </div>

        <div className={styles.ps1}>
          <h2 className={styles.h2}>Services</h2>
          <p className={styles.p}>Bonus program</p>
          <p className={styles.p}>Gift cards</p>
          <p className={styles.p}>Credit and payment</p>
          <p className={styles.p}>Service contracts</p>
          <p className={styles.p}>Non-cash account</p>
          <p className={styles.p}>Payment</p>
        </div>

        <div className={styles.ps2}>
          <h2 className={styles.h2}>Assistance to the buyer</h2>
          <p className={styles.p}>Find an order</p>
          <p className={styles.p}>Terms of delivery</p>
          <p className={styles.p}>Exchange and return of goods</p>
          <p className={styles.p}>Guarantee</p>
          <p className={styles.p}>Frequently asked questions</p>
          <p className={styles.p}>Terms of use of the site</p>
        </div>
      </div>

      <div className={clsx(styles.container, styles.icons)}>
        <img src="/images/Twitter.svg" alt="Twitter" />
        <img src="/images/Facebook.svg" alt="Facebook" />
        <img src="/images/Tiktok.svg" alt="Tiktok" />
        <img src="/images/Instagram.svg" alt="Instagram" />
      </div>
    </div>
  );
}

export default Footer;
