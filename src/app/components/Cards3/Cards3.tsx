"use client";
import clsx from "clsx";
import styles from "./Cards3.module.css";
import React, { useState } from "react";
import products from "@/data/cards3.json";
import { Product, CartItem } from "@/types";
import { useCart } from "@/context/cartContext";

type Props = {};

function Cards3({}: Props) {
  const { addToCart } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false); // State for modal
  const [addedProduct, setAddedProduct] = useState<string>(""); // Store product name

  // Handle line breaks in product names
  const formatName = (name: string) => {
    return {
      __html: name.replace(/<br>/g, '<br className="' + styles.br + '"/>'),
    };
  };

  const handleBuyNow = (product: Product) => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace(/[^0-9.]/g, "")),
      img: product.img,
      code: product.code || null, // Handle missing code
      quantity: 1,
    };
    addToCart(cartItem);
    setAddedProduct(product.name); // Set the product name for the message
    setShowConfirmation(true); // Show the confirmation
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false); // Hide the confirmation
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
            <button
              className={styles.buyNow}
              onClick={() => handleBuyNow(product)}
            >
              Buy Now
            </button>
            <img
              className={styles.heart}
              src="/images/Like.svg"
              alt="Like icon"
            />
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
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
    </>
  );
}

export default Cards3;