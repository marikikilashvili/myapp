import clsx from "clsx";
import styles from "./Header.module.css";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <div className={clsx(styles.header, styles.container)}>
      <div>
        <img className={clsx(styles.logo)} src="./images/Logo.svg" alt="" />
      </div>
      <div className={clsx(styles["searchContainer"])}>
        <input
          className={clsx(styles.input1)}
          type="text"
          placeholder="search"
        />
        <img
          src="./public/images/Search.svg"
          alt="search icon"
          className={clsx(styles["searchIcon"])}
        />
      </div>
      <div className={clsx(styles.lis4)}>
        <ul className={clsx(styles.li4)}>
          <li>
            <a className={clsx(styles.a)} href="#home">
              Home
            </a>
          </li>
          <li>
            <a className={clsx(styles.a)} href="#about">
              About
            </a>
          </li>
          <li>
            <a className={clsx(styles.a)} href="#contact">
              Contact Us
            </a>
          </li>
          <li>
            <a className={clsx(styles.a)} href="#blog">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className={clsx(styles.icons3)}>
        <img src="./images/heart.svg" alt="" />
        <img
          className={clsx(styles["cart-icon"])}
          src="./images/Cart.svg"
          alt=""
        />
        <img src="./images/User.svg" alt="" />
      </div>
      <img className={clsx(styles.burger)} src="./images/Burger.svg" alt="" />
    </div>
  );
}

export default Header;
