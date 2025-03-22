"use client";
import { CartProvider } from "@/context/cartContext";
import { ReactNode } from "react";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}