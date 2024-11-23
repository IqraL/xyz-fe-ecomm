import React, { useEffect, useState } from "react";
import { Cart, Product } from "../types";
import { API_URL } from "../constants";

const getCart = async (setCart: (cart: Cart) => void) => {
  try {
    const response = await fetch(`${API_URL}/get-cart`, {
      method: "GET",
      credentials: "include",
    });
    const result = await response.json();
    setCart(result);
  } catch (error) {}
};

export const CartPage = () => {
  const [cart, setCart] = useState<Cart>();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!cart) getCart(setCart);
    console.log(cart);
  }, [cart]);

  return <div>Cart page</div>;
};
