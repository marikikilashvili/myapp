"use client";
import clsx from "clsx";
import styles from "./shopping.module.css";
import React, { useEffect, useState } from "react";
import { CartItem } from "@/types";

export default function Shopping() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showEmptyCart, setShowEmptyCart] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedItems: CartItem[] = JSON.parse(savedCart).map(
          (item: any) => ({
            ...item,
            id: Number(item.id),
            price: Number(item.price),
            quantity: Number(item.quantity),
          })
        );
        setCartItems(parsedItems);
      } catch (error) {
        console.error("Error parsing cart:", error);
      }
    }
  }, []);

  // Update cart and summary
  useEffect(() => {
    updateOrderSummary();
    setShowEmptyCart(cartItems.length === 0);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateOrderSummary = () => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = subtotal * 0.2;
    const shipping = subtotal * 0.1;
    const total = subtotal + tax + shipping;

    if (typeof document !== "undefined") {
      const updateElement = (id: string, value: number) => {
        const element = document.getElementById(id);
        if (element) element.textContent = `$${value.toFixed(2)}`;
      };

      updateElement("subtotal", subtotal);
      updateElement("tax", tax);
      updateElement("shipping", shipping);
      updateElement("total", total);
    }
  };

  return (
    <section className={clsx(styles.container, styles.section)}>
      <div className={styles.shopCards}>
        <h2 className={styles.shopping}>Shopping Cart</h2>

        {showEmptyCart && (
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
                  <p className={styles.p}>{item.code}</p>
                </div>
              </div>
              <div className={styles.qvesh}>
                <div className={styles.select}>
                  <img
                    className={styles.minus}
                    src="/images/No-Edit.svg"
                    alt="Decrease quantity"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  />
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
                    onClick={() => removeItem(item.id)}
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
              <h3 className={styles.h3} id="subtotal">
                $0.00
              </h3>
            </div>

            <div className={styles.pDollar}>
              <p className={styles.estimated}>Estimated Tax</p>
              <h3 className={styles.h3} id="tax">
                $0.00
              </h3>
            </div>

            <div className={styles.pDollar}>
              <p className={styles.estimated}>Shipping & Handling</p>
              <h3 className={styles.h3} id="shipping">
                $0.00
              </h3>
            </div>

            <div className={styles.pDollar}>
              <p className={styles.total}>Total</p>
              <h3 className={styles.h3} id="total">
                $0.00
              </h3>
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
