// src/types.ts
export interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
  code: string;
  quantity: number;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
  code: string;
  favorite: boolean;
}
