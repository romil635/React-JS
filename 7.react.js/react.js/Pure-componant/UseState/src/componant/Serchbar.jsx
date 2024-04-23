// src/components/SearchBar.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://api.example.com/recipes?q=${value}`); // Replace with a real recipe API
        setSuggestions(data.recipes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [value]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* Display recipe suggestions */}
      <ul>
        {suggestions.map((recipe) => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
      {/* Render recipe details */}
      {suggestions.length > 0 && <RecipeCard recipe={suggestions[0]} />} {/* Display the first recipe */}
    </div>
  );
};

export default SearchBar;
