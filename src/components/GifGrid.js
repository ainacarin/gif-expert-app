import React, { useState, useEffect } from "react";
import { getGifs } from "../api/giphyApi";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

    // exect only when dependencies are modified
    useEffect(() => {
      getGifs( category ).then(setImages);
    }, [category]);
    //   // exect only once time, the first time component
    //   useEffect(() => {
    //     getGifs( category ).then( setImages );
    //   }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
