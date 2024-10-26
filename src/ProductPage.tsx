import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Product } from "./types";
import { API_URL } from "./constants";

const getProduct =async (id: string, setProduct: (product: Product)=>void) => {
  const response = await fetch(`${API_URL}/product-by-id?id=${id}`);
  const product = await response.json()
  setProduct(product)
}
export const ProductPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id") || "";
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {   
    getProduct(productId, setProduct)
  }, [productId]);

  console.log(productId);
  console.log(product);
  return <div>Product Page</div>;
};
