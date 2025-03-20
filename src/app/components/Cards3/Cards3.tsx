"use client";
import clsx from "clsx";
import styles from "./Cards3.module.css";
import React from "react";
import products from "@/data/cards3.json";

type Props = {};

function Cards3({}: Props) {
  // Handle line breaks in product names
  const formatName = (name: string) => {
    return {
      __html: name.replace(/<br>/g, '<br className="' + styles.br + '"/>'),
    };
  };

  return (
    <>
      <p className={clsx(styles.discounts, styles.container)}>
        Discounts up to -50%
      </p>
      <div className={clsx(styles.cards3, styles.container)}>
        {products.map((product) => (
          <div className={styles.card2} key={product.id}>
            <img
              className={styles.phone3}
              src={product.img}
              alt={product.name}
            />
            <p
              className={styles.apple}
              dangerouslySetInnerHTML={formatName(product.name)}
            />
            <p className={styles.dollar}>{product.price}</p>
            <button className={styles.buyNow}>Buy Now</button>
            <img
              className={styles.heart}
              src="/images/Like.svg"
              alt="Like icon"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards3;
