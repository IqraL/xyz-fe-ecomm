import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Product } from "../types";
import { API_URL } from "../constants";

const getProduct = async (
  id: string,
  setProduct: (product: Product) => void
) => {
  const response = await fetch(`${API_URL}/product-by-id?id=${id}`);
  const product = await response.json();
  setProduct(product);
};
export const ProductPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id") || "";
  const [product, setProduct] = useState<Product | null>(null);
  const [addedToCart, setAddedToCart] = useState(false);

  const onBuy = useCallback(
    async (quantity: number) => {
      try {
        console.log("productId, quantity", productId, quantity);
        await fetch(`${API_URL}/add-to-cart`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ productId, quantity }),
          credentials: "include",
        });

        setAddedToCart(true);
      } catch (error) {
        setAddedToCart(false);
      }
    },
    [productId]
  );

  useEffect(() => {
    getProduct(productId, setProduct);
  }, [productId]);

  console.log(productId);
  console.log(product);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          {/**@ts-ignore */}
          <img
            src={product?.images[0]}
            height={400}
            width={400}
            alt="productImg"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>{product?.title}</div>
        <Gap />
        <div>{product?.description}</div>
        <Gap />
        <div>£{product?.price}</div>
        <Gap />
        <button
          style={{
            height: 50,
            width: 200,
            borderRadius: 80,
            cursor: "pointer",
            backgroundColor: "#34a4eb",
          }}
          onClick={() => onBuy(1)}
        >
          Add to cart
        </button>
        <div>{addedToCart && <div>@ added to cart</div>}</div>
      </div>
    </div>
  );
};

const Gap = () => {
  return <div style={{ paddingBottom: 30 }}></div>;
};
