import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useCategories } from "../hooks/useCategories";

export const Sidebar = () => {
  const [categories] = useCategories();
  const navigate = useNavigate();

  const handleCategoryClick = useCallback(
    (category: String) => {
      navigate(`/category?name=${encodeURIComponent(category as string)}`);
    },
    [navigate]
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 20,
      }}
    >
      <div
       
      >
        {categories.map((category, index) => {
          return (
            <div
              onClick={() => handleCategoryClick(category)}
              style={{
                cursor: "pointer",
                marginTop: 20,
                fontSize: "1rem",
                borderBottom: "1px solid #000",
                padding: "1rem",
              }}
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
