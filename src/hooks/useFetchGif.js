import { useEffect, useState } from "react";
import { getGifs } from "../api/giphyApi";

export const useFetchGif = (category) => {
  // advice about changes
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  // exec once time
  useEffect(() => {
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      }, 3000);
    });
  }, [category]);

  return state;
};
