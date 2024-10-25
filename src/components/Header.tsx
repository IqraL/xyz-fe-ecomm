import React from "react";
import { useNavigate } from "react-router-dom";

const shopNameStyle = {
  fontSize: "2rem",
  padding: "1rem",
  borderBottom: "1px solid #000",
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",
};
export const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate(`/`);
  };

  return (
    <div onClick={handleHomeClick} style={shopNameStyle}>
      ECOMM
    </div>
  );
};
