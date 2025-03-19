"use client";
import clsx from "clsx";
import styles from "./shopping.module.css";
import React from "react";

type Props = {};

function Shopping({}: Props) {
  return (
    <>
      {/* Cards start */}
      <section className={clsx(styles.container, styles.section)}>
        <div className={styles.shopCards}>
          <h2 className={styles.shopping}>Shopping Cart</h2>

          <div className={styles.noItems} style={{ display: "none" }}>
            <img src="/images/no-items.png" alt="No items in cart" />
            <p>Your cart is empty.</p>
          </div>

          {/* Repeatable shop card */}
          <div className={clsx(styles.shopCard, styles.cards1)}>
            <div className={styles.qvesh1}>
              <div className={styles.shop1}>
                <img
                  className={styles.shopPhone}
                  src="/images/phone3.png"
                  alt=""
                />
              </div>
              <div className={styles.shopH2p}>
                <h2 className={styles.h2}>
                  Apple iPhone 14 Pro Max 128Gb Deep Purple
                </h2>
                <p className={styles.p}>#25139526913984</p>
              </div>
            </div>
            <div className={styles.qvesh}>
              <div className={styles.select}>
                <img
                  className={styles.minus}
                  src="/images/No Edit.svg"
                  alt=""
                />
                <p className={styles.erti}>1</p>
                <img className={styles.plus} src="/images/Edit.svg" alt="" />
              </div>
              <div className={styles.shopDollar}>
                <p>$1399</p>
              </div>
              <div className={styles.close}>
                <img className={styles.img} src="/images/Close.svg" alt="" />
              </div>
            </div>
          </div>

          <hr className={styles.hr} />

          <div className={clsx(styles.shopCard, styles.cards2)}>
            <div className={styles.qvesh1}>
              <div className={styles.shop1}>
                <img
                  className={styles.shopPhone}
                  src="/images/phone3.png"
                  alt=""
                />
              </div>
              <div className={styles.shopH2p}>
                <h2 className={styles.h2}>
                  Apple iPhone 14 Pro Max 128Gb Deep Purple
                </h2>
                <p className={styles.p}>#25139526913984</p>
              </div>
            </div>
            <div className={styles.qvesh}>
              <div className={styles.select}>
                <img
                  className={styles.minus}
                  src="/images/No Edit.svg"
                  alt=""
                />
                <p className={styles.erti}>1</p>
                <img className={styles.plus} src="/images/Edit.svg" alt="" />
              </div>
              <div className={styles.shopDollar}>
                <p>$1399</p>
              </div>
              <div className={styles.close}>
                <img className={styles.img} src="/images/Close.svg" alt="" />
              </div>
            </div>
          </div>

          <hr className={styles.hr} />

          <div className={clsx(styles.shopCard, styles.cards3)}>
            <div className={styles.qvesh1}>
              <div className={styles.shop1}>
                <img
                  className={styles.shopPhone}
                  src="/images/phone3.png"
                  alt=""
                />
              </div>
              <div className={styles.shopH2p}>
                <h2 className={styles.h2}>
                  Apple iPhone 14 Pro Max 128Gb Deep Purple
                </h2>
                <p className={styles.p}>#25139526913984</p>
              </div>
            </div>
            <div className={styles.qvesh}>
              <div className={styles.select}>
                <img
                  className={styles.minus}
                  src="/images/No Edit.svg"
                  alt=""
                />
                <p className={styles.erti}>1</p>
                <img className={styles.plus} src="/images/Edit.svg" alt="" />
              </div>
              <div className={styles.shopDollar}>
                <p>$1399</p>
              </div>
              <div className={styles.close}>
                <img className={styles.img} src="/images/Close.svg" alt="" />
              </div>
            </div>
          </div>

          <hr className={styles.hr} />
        </div>

        {/* Order Summary */}
        <nav className={styles.nav}>
          <div className={styles.order}>
            <h2 className={styles.h2}>Order Summary</h2>
            <h3 className={styles.h3}>Discount code / Promo code</h3>
            <input
              className={clsx(styles.code, styles.input)}
              type="text"
              placeholder="Code"
            />
            <h3 className={styles.h3}>Your bonus card number</h3>
            <div className={styles.inputContainer}>
              <input
                className={clsx(styles.enter, styles.input)}
                type="text"
                placeholder="Enter Card Number"
              />
              <button className={styles.applyBtn}>Apply</button>
            </div>
            <div className={styles.pDollars}>
              <div className={styles.pDollar}>
                <p className={styles.subtotal}>Subtotal</p>
                <h3 className={clsx(styles.pDollar, styles.h3)} id="subtotal">
                  $0
                </h3>
              </div>
              <div className={styles.pDollar}>
                <p className={clsx(styles.estimated, styles.tax)}>
                  Estimated Tax
                </p>
                <h3 className={styles.h3} id="tax">
                  $0
                </h3>
              </div>
              <div className={styles.pDollar}>
                <p className={`${styles.estimated} ${styles.shipping}`}>
                  Estimated shipping & Handling
                </p>
                <h3 className={styles.h3} id="shipping">
                  $0
                </h3>
              </div>
              <div className={styles.pDollar}>
                <p className={styles.total}>Total</p>
                <h3 className={styles.h3} id="total">
                  $0
                </h3>
              </div>
            </div>
            <button className={clsx(styles.checkout, styles.shopNow)}>
              Checkout
            </button>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Shopping;
