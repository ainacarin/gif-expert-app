import React from "react";

import "./GifExpertApp.css";
import { AddCategory } from './components/AddCategory';
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const categoriesInit = ["Dragon Ball"];

  // change => new render
  const [categories, setCategories] = React.useState(categoriesInit);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />

      <ul>
        {categories.map((category) => <GifGrid key={category} category={ category }/>)}
      </ul>
    </>
  );
};
