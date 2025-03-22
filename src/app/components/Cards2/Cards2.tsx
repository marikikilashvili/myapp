"use client";
import React, { useState } from "react"; // Add React import
import styles from "./Cards2.module.css";
import { Product, CartItem } from "@/types";
import { useCart } from "@/context/cartContext";

interface Cards2Props {
  products?: Product[];
}

function Cards2({ products = [] }: Cards2Props) {
  const { addToCart } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [addedProduct, setAddedProduct] = useState<string>("");

  const renderName = (name: string) => {
    const parts = name.split("<br>");
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < parts.length - 1 && <br className={styles.br} />}
      </React.Fragment>
    ));
  };

  const handleBuyNow = (product: Product) => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace(/[^0-9.]/g, "")),
      img: product.img,
      code: product.code || null,
      quantity: 1,
    };
    addToCart(cartItem);
    setAddedProduct(product.name);
    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
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
            <p className={styles.apple}>{renderName(product.name)}</p>
            <p className={styles.dollar}>{product.price}</p>
            <button
              className={styles.buyNow}
              onClick={() => handleBuyNow(product)}
            >
              Buy Now
            </button>
            <img className={styles.heart} src="/images/Like.svg" alt="Like" />
          </div>
        ))}
      </div>

      {showConfirmation && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <p>Product "{addedProduct}" added to cart!</p>
            <button
              className={styles.okButton}
              onClick={handleCloseConfirmation}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards2;