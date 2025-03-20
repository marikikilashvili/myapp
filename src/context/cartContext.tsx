// src/context/CartContext.tsx
"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { CartItem } from "../types";

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const addToCart = (product: Omit<CartItem, "quantity">) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      const newCart = [...prev, { ...product, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prev) => {
      const newCart = prev
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const removeItem = (id: number) => {
    setCart((prev) => {
      const newCart = prev.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
