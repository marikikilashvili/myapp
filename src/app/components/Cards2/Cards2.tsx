"use client";
import styles from "./Cards2.module.css";
import { Product, CartItem } from "@/types";
import { useCart } from "@/context/cartContext";

interface Cards2Props {
  products?: Product[];
}

function Cards2({ products = [] }: Cards2Props) {
  const { addToCart } = useCart();

  const handleBuyNow = (product: Product) => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace(/[^0-9.]/g, "")),
      img: product.img,
      code: product.code,
      quantity: 1,
    };
    addToCart(cartItem);
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
            <p className={styles.apple}>{product.name}</p>
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
    </div>
  );
}

export default Cards2;
