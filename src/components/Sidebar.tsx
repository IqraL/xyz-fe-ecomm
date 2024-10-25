import React from "react";
import { useNavigate } from "react-router-dom";
import { useCategories } from "../hooks/useCategories";

export const Sidebar = () => {
  const [categories] = useCategories();
  const navigate = useNavigate();

  const handleCategoryClick = (category: String) => {
    navigate(`/category?name=${encodeURIComponent(category as string)}`);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        {categories.map((category, index) => {
          return (
            <div
              onClick={() => handleCategoryClick(category)}
              style={{ cursor: "pointer" }}
              key={`${index}-${category}`}
            >
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
};
