import React from "react";

import "./GifExpertApp.css";
import { AddCategory } from './components/AddCategory';
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const categoriesInit = ["Rick and Morty"];

  // change => new render
  const [categories, setCategories] = React.useState(categoriesInit);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />

      <ol>
        {categories.map((category) => <GifGrid key={category} category={ category }/>)}
      </ol>
    </>
  );
};
