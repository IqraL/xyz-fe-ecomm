import React, { useCallback, useEffect, useState } from "react";
import { API_URL } from "../constants";
import { Product } from "../types";
import { useLocation, useNavigate } from "react-router-dom";

const getCookie = async () => {
  await fetch(`${API_URL}/get-cookie`, {
    method: "GET",
    credentials: "include",
  });
};

const getAllProducts = async (setProducts: (product: Product[]) => void) => {
  try {
    const response = await fetch(`${API_URL}/products`);
    const parsedResponse = await response.json();
    setProducts(parsedResponse);
  } catch (error) {
    console.log("error getting or setting all products ");
  }
};

export const HomePage = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);

  const handleProductClick = useCallback(
    (product: Product) => {
      console.log("handleProductClick");
      navigate(`/product?id=${encodeURIComponent(product.id)}`);
    },
    [navigate]
  );

  useEffect(() => {
    getCookie();
    getAllProducts(setProducts);
  }, []);

  console.log("products", products);

  return (
    <div style={{ display: "grid", marginLeft: 50 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          rowGap: 50,
        }}
      >
        {products.map((product) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => handleProductClick(product)}
          >
            <img
              src={
                product?.thumbnail ||
                "https://blocks.astratic.com/img/general-img-landscape.png"
              }
              width={300}
              height={300}
              alt="productImage"
            />
            <div>{product.title}</div>
            <div>£{product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
