import React, { useEffect } from "react";
import { API_URL } from "../constants";

const getCookie = async () => {
  await fetch(`${API_URL}/get-cookie`, {
    method: "GET",
    credentials: "include",
  });
};

export const HomePage = () => {
  useEffect(() => {
    getCookie();
  }, []);

  return <div>Home Page</div>;
};
