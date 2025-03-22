export interface Product {
    id: number;
    name: string;
    price: string;
    img: string;
    code: string;
  }
  
  export interface CartItem {
    id: number;
    name: string;
    price: number;
    img: string;
    code: string;
    quantity: number;
  }