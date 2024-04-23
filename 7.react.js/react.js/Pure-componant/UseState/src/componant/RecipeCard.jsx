// src/components/RecipeCard.jsx

import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <h2 className="recipe-title">{recipe.title}</h2>
      <p className="recipe-description">{recipe.description}</p>
      {/* Add other recipe details (ingredients, instructions, etc.) */}
    </div>
  );
};

export default RecipeCard;
