"use client";
import clsx from "clsx";
import styles from "./Cards.module.css";
import React from "react";

type Props = {};

function Cards({}: Props) {
  return (
    <>
      <div className={styles.gridContainer1}>
        <div className={styles.yellow1}>
          <div className={clsx(styles.item, styles.wide)}>
            <div>
              <img
                className={clsx(styles.playstation, styles.no)}
                src="/images/PlayStation.png"
                alt="PlayStation"
              />
              <img
                className={clsx(styles.playst, styles.on)}
                src="/images/playst.png"
                alt="PlayStation Alt"
              />
            </div>
            <div className={clsx(styles.column, styles.column1)}>
              <h2 className="h2">Playstation 5</h2>
              <p className="p">
                Incredibly powerful CPUs, GPUs, and an SSD with{" "}
                <br className="br" />
                integrated I/O will redefine your PlayStation{" "}
                <br className="br" />
                experience.
              </p>
            </div>
          </div>

          <div className={styles.green1}>
            <div className={clsx(styles.item, styles.small1)}>
              <div>
                <img
                  className={clsx(styles.yursasmeni, styles.no)}
                  src="/images/yursasmeni.png"
                  alt="AirPods"

                />
                <img
                  className={clsx(styles.yurs, styles.on)}
                  src="/images/yurs.png"
                  alt="AirPods Alt"

                />
              </div>
              <div className={styles.column}>
                <h2 className="h2">
                  Apple <br className="br" />
                  AirPods <br className="br" />
                  <span className={styles.smallSpan}>Max</span>
                </h2>
                <p className="p">Computational audio. Listen, it's powerful</p>
              </div>
            </div>

            <div className={clsx(styles.item, styles.small)}>
              <div>
                <img
                  className={clsx(styles.satvale, styles.no)}
                  src="/images/satvale.png"
                  alt="Apple Vision"

                />
                <img
                  className={clsx(styles.satv, styles.on)}
                  src="/images/satv.png"
                  alt="Apple Vision Alt"

                />
              </div>
              <div className={styles.column}>
                <h2 className="h2">
                  Apple <br className="br" />
                  Vision <span className={styles.smallSpan}>Pro</span>
                </h2>
                <p className="p">
                  An immersive way to experience entertainment
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={clsx(styles.item, styles.tall)}>
          <img
            className={clsx(styles.macbook, styles.no)}
            src="/images/MacBook Pro 14.png"
            alt="MacBook"

          />
          <img
            className={clsx(styles.macb, styles.on)}
            src="/images/MacBook Pro 14 (1).png"
            alt="MacBook Alt"

          />
          <div className={clsx(styles.column, styles.column1, styles.column2)}>
            <h2 className="h2">
              Macbook <br className="br" />
              <span className={styles.tallSpan}>Air</span>
            </h2>
            <p className="p">
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <button className={clsx(styles.shopNow, styles.shopNow1)}>
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className={styles.grey}>
        <div className={styles.container}>
          <div className={styles.browseArrows}>
            <div className={styles.browse}>
              <p>Browse By Category</p>
            </div>
            <div className={styles.arrows}>
              <img
                src="/images/Arrow1.svg"
                alt="Arrow Left"

              />
              <img
                src="/images/Arrow2.svg"
                alt="Arrow Right"

              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
