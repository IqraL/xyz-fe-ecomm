import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_URL } from "../constants";
import { Product } from "../types";

const getProductsByCategory = async (
  categoryName: string,
  setProducts: (products: Product[]) => void
) => {
  const response = await fetch(
    `${API_URL}/products-by-category?category=${categoryName}`
  );
  const products = await response.json();
  setProducts(products);
};

export const CategoryPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryName = queryParams.get("name") || "";
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProductsByCategory(categoryName, setProducts);
  }, [categoryName]);

  const handleProductClick = useCallback(
    (product: Product) => {
      navigate(`/product?id=${encodeURIComponent(product.id)}`);
    },
    [navigate]
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 10,
        height: "fit-content",
      }}
    >
      {products.map((product: Product) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            height: "400px",
            cursor: "pointer",
          }}
          onClick={() => handleProductClick(product)}
        >
          <div>
            <img src={product.thumbnail} width={300} height={300} />
          </div>
          <div>{product.title}</div>
          <div>£{product.price}</div>
        </div>
      ))}
    </div>
  );
};
