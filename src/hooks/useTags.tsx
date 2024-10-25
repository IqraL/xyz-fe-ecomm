import { useEffect, useState } from "react";
import { API_URL } from "../constants";

const getTagsMap = async (setter: (value: any) => void) => {
  const response = await fetch(`${API_URL}/tags-map`);
  const json = await response.json();
  return setter(json);
};

const useTagMap: any = () => {
  const [tagMap, setTagMap] = useState({});
  useEffect(() => {
    getTagsMap(setTagMap);
  }, []);

  return [tagMap];
};
export { useTagMap };
