"use client";
import clsx from "clsx";
import styles from "./shopping.module.css";
import React, { useState, useEffect } from "react";
import { useCart } from "@/context/cartContext";

export default function Shopping() {
  const { cart: cartItems, updateQuantity, removeFromCart } = useCart();
  const [summary, setSummary] = useState({
    subtotal: 0,
    tax: 0,
    shipping: 0,
    total: 0,
  });

  useEffect(() => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = subtotal * 0.2;
    const shipping = subtotal * 0.1;
    const total = subtotal + tax + shipping;

    setSummary({ subtotal, tax, shipping, total });
  }, [cartItems]);

  return (
    <section className={clsx(styles.container, styles.section)}>
      <div className={styles.shopCards}>
        <h2 className={styles.shopping}>Shopping Cart</h2>

        {cartItems.length === 0 && (
          <div className={styles.noItems}>
            <img
              className={styles.img}
              src="/images/no-items.jpg"
              alt="Empty cart"
            />
            <p>Your cart is empty</p>
          </div>
        )}

        {cartItems.map((item) => (
          <React.Fragment key={item.id}>
            <div className={clsx(styles.shopCard, styles.cards1)}>
              <div className={styles.qvesh1}>
                <div className={styles.shop1}>
                  <img
                    className={styles.shopPhone}
                    src={item.img}
                    alt={item.name}
                  />
                </div>
                <div className={styles.shopH2p}>
                  <h2 className={styles.h2}>{item.name}</h2>
                  <p className={styles.p}>{item.code || "N/A"}</p>
                </div>
              </div>
              <div className={styles.qvesh}>
                <div className={styles.select}>
                  <div
                    className={styles.minus}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    −
                  </div>
                  <p className={styles.erti}>{item.quantity}</p>
                  <img
                    className={styles.plus}
                    src="/images/Edit.svg"
                    alt="Increase quantity"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  />
                </div>
                <div className={styles.shopDollar}>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className={styles.close}>
                  <img
                    className={styles.img}
                    src="/images/Close.svg"
                    alt="Remove item"
                    onClick={() => removeFromCart(item.id)}
                  />
                </div>
              </div>
            </div>
            <hr className={styles.hr} />
          </React.Fragment>
        ))}
      </div>

      <nav className={styles.nav}>
        <div className={styles.order}>
          <h2 className={styles.h2}>Order Summary</h2>
          <div className={styles.pDollars}>
            <div className={styles.pDollar}>
              <p className={styles.subtotal}>Subtotal</p>
              <h3 className={styles.h3}>${summary.subtotal.toFixed(2)}</h3>
            </div>
            <div className={styles.pDollar}>
              <p className={styles.estimated}>Estimated Tax</p>
              <h3 className={styles.h3}>${summary.tax.toFixed(2)}</h3>
            </div>
            <div className={styles.pDollar}>
              <p className={styles.estimated}>Shipping & Handling</p>
              <h3 className={styles.h3}>${summary.shipping.toFixed(2)}</h3>
            </div>
            <div className={styles.pDollar}>
              <p className={styles.total}>Total</p>
              <h3 className={styles.h3}>${summary.total.toFixed(2)}</h3>
            </div>
          </div>
          <button className={clsx(styles.checkout, styles.shopNow)}>
            Checkout
          </button>
        </div>
      </nav>
    </section>
  );
}