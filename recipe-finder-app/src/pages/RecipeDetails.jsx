import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { recipesData } from '../data/recipesData';
import { useTheme } from '../contexts/ThemeContext';

const RecipeDetails = ({ savedItems, onSave, onRemove }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const recipe = recipesData.find(r => r.id === parseInt(id));
  const isSaved = savedItems.some(item => item.id === parseInt(id));

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: isDarkMode ? '#1a1a2e' : '#f5f5f5',
    padding: '2rem'
  };

  const cardStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: isDarkMode ? '#16213e' : '#fff',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginRight: '1rem',
    marginTop: '1rem'
  };

  if (!recipe) {
    return (
      <div style={containerStyle}>
        <div style={cardStyle, { textAlign: 'center' }}>
          <h2>Recipe Not Found</h2>
          <p>Sorry, we couldn't find the recipe you're looking for.</p>
          <button 
            onClick={() => navigate('/recipes')}
            style={{ ...buttonStyle, backgroundColor: '#3498db', color: '#fff' }}
          >
            Back to Recipes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ color: '#e74c3c', marginBottom: '1rem' }}>{recipe.title}</h1>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <p><strong>📂 Category:</strong> {recipe.category}</p>
          <p><strong>⚡ Difficulty:</strong> {recipe.difficulty}</p>
          <p><strong>⏱️ Cooking Time:</strong> {recipe.cookingTime} minutes</p>
          <p><strong>⭐ Rating:</strong> {recipe.rating}/5</p>
          <p><strong>🔥 Calories:</strong> {recipe.calories} kcal</p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3>🛒 Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3>📖 Description:</h3>
          <p>{recipe.description}</p>
        </div>

        <div>
          {isSaved ? (
            <button 
              onClick={() => onRemove(recipe.id)}
              style={{ ...buttonStyle, backgroundColor: '#e74c3c', color: '#fff' }}
            >
              Remove from Saved
            </button>
          ) : (
            <button 
              onClick={() => onSave(recipe)}
              style={{ ...buttonStyle, backgroundColor: '#2ecc71', color: '#fff' }}
            >
              Save Recipe
            </button>
          )}
          <button 
            onClick={() => navigate('/recipes')}
            style={{ ...buttonStyle, backgroundColor: '#3498db', color: '#fff' }}
          >
            Back to Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;