import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const RecipeCard = memo(({ recipe, isSaved, onSave, onRemove }) => {
  const { isDarkMode } = useTheme();

  const cardStyle = {
    backgroundColor: isDarkMode ? '#34495e' : '#fff',
    color: isDarkMode ? '#ecf0f1' : '#2c3e50',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    marginRight: '0.5rem'
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
      }}
    >
      <h3 style={{ margin: '0 0 0.5rem 0', color: '#e74c3c' }}>{recipe.title}</h3>
      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
      <p><strong>Cooking Time:</strong> {recipe.cookingTime} min</p>
      <p><strong>⭐ Rating:</strong> {recipe.rating}</p>
      
      <div style={{ marginTop: '1rem' }}>
        <Link to={`/recipes/${recipe.id}`}>
          <button style={{ ...buttonStyle, backgroundColor: '#3498db', color: '#fff' }}>
            View Details
          </button>
        </Link>
        
        {isSaved ? (
          <button 
            onClick={() => onRemove(recipe.id)}
            style={{ ...buttonStyle, backgroundColor: '#e74c3c', color: '#fff' }}
          >
            Remove
          </button>
        ) : (
          <button 
            onClick={() => onSave(recipe)}
            style={{ ...buttonStyle, backgroundColor: '#2ecc71', color: '#fff' }}
          >
            Save Recipe
          </button>
        )}
      </div>
    </div>
  );
});

export default RecipeCard;