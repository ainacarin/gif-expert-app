import React from "react";

import "./GifExpertApp.css";
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const categoriesInit = ["Dragon Ball", "Sailor Moon", "Samurai Shamploo"];

  // change => new render
  const [categories, setCategories] = React.useState(categoriesInit);

  // const handleAdd = (event) => {
  //   // option A - spreading
  //   // setCategories([...categories, 'Naruto']);
    
  //   // option B - callback
  //   setCategories((oldCategories) => [...categories, 'Naruto']);
  // };


  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />

      {/* <button onClick={handleAdd}>Add</button> */}
      <ul>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ul>
    </>
  );
};
