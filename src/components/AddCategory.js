import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./AddCategory.css";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);


  const resetError = () => setError('');

  const handleChangeInput = (event) => {
    resetError();
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // validation no empty input
    if (inputValue.trim().length > 1) {
      setCategories((oldCategories) => [...oldCategories, inputValue]);
      // clean input
      setInputValue("");
    } else{
      setError('Error value');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChangeInput}
          placeholder="Write new character"
        ></input>
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

// Proptypes definition
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}