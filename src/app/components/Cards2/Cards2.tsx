// "use client";
// import clsx from "clsx";
// import styles from "./Cards2.module.css";
// import React from "react";
// import products from "@/data/cards2.json";

"use client";
import styles from "./Cards2.module.css";
import { Product } from "@/types";
import { useCart } from "@/context/cartContext";

interface Cards2Props {
  products?: Product[];
}

// Add proper formatName function
const formatName = (name: string) => {
  return { __html: name.replace(/<br>/g, "<br/>") };
};

function Cards2({ products = [] }: Cards2Props) {
  const { addToCart } = useCart();

  const handleBuyNow = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace("$", "")),
      img: product.img,
      code: product.code,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <p className={styles.p}>New Arrival</p>
        <p className={styles.p}>Bestseller</p>
        <p className={styles.p}>Featured Products</p>
      </div>
      <div className={styles.cards2}>
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
            <button className={styles["buy-now"]}>Buy Now</button>
            <img className={styles.heart} src="/images/Like.svg" alt="Like" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards2;
