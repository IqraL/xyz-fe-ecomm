import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API_URL } from "../constants";

const getProductsByCategory = async (
  categoryName: string,
  setProducts: (products: String[]) => void
) => {
  const response = await fetch(
    `${API_URL}/products-by-category?category=${categoryName}`
  );
  const products = await response.json();
  setProducts(products);
};
export const CategoryPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryName = queryParams.get("name") || "";
  const [products, setProducts] = useState<String[]>([]);

  useEffect(() => {
    getProductsByCategory(categoryName, setProducts);
  }, [categoryName]);

  console.log(products);

  return <div>Category Page : {categoryName}</div>;
};
