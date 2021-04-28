import React, { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

    const [images, setImages] =  useState([]);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=O6h3slC7ujbApu4X7z1Fmop9mZQymABw";
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      const { id, title, images } = img;
      return {
        id,
        title,
        url: images?.downsized_medium.url,
      };
    });
    setImages(gifs);
  };

  // exect only when dependencies are modified
  useEffect(() => {
    getGifs(category);
  }, [category]);
//   // exect only once time, the first time component
//   useEffect(() => {
//     getGifs(category);
//   }, []);

  return (
    <div>
      <h3>{category}</h3>
      {
          images.map( img => (
              <GifGridItem key={img.id} {...img} />
          ) )
      }
    </div>
  );
};
