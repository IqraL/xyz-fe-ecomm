import { useEffect, useState } from "react";
import { API_URL } from "../constants";

const getCategories = async (setter: (value: any) => void) => {
  const response = await fetch(`${API_URL}/categories`);
  const json = await response.json();
  return setter(json);
};

const useCategories = () => {
  const [categories, setCategories] = useState<String[]>([]);
  useEffect(() => {
    getCategories(setCategories);
  }, []);

  return [categories];
};
export { useCategories };