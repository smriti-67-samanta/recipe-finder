import React, { useMemo } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Saved = ({ savedItems, onRemove }) => {
  const { isDarkMode } = useTheme();

  // useMemo for saved items summary
  const summary = useMemo(() => {
    if (savedItems.length === 0) {
      return { totalTime: 0, totalCalories: 0, avgRating: 0 };
    }

    const totalTime = savedItems.reduce((sum, item) => sum + item.cookingTime, 0);
    const totalCalories = savedItems.reduce((sum, item) => sum + item.calories, 0);
    const avgRating = savedItems.reduce((sum, item) => sum + item.rating, 0) / savedItems.length;

    return { totalTime, totalCalories, avgRating: avgRating.toFixed(1) };
  }, [savedItems]);

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: isDarkMode ? '#1a1a2e' : '#f5f5f5',
    padding: '2rem'
  };

  const cardStyle = {
    backgroundColor: isDarkMode ? '#16213e' : '#fff',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem'
  };

  const summaryCardStyle = {
    backgroundColor: isDarkMode ? '#0f3460' : '#e74c3c',
    color: '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    marginBottom: '2rem',
    textAlign: 'center'
  };

  if (savedItems.length === 0) {
    return (
      <div style={containerStyle}>
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <h2 style={{ color: isDarkMode ? '#ecf0f1' : '#2c3e50' }}>
            📋 No saved recipes yet
          </h2>
          <p style={{ color: isDarkMode ? '#bdc3c7' : '#7f8c8d' }}>
            Start exploring and save your favorite recipes!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: 'center', color: isDarkMode ? '#ecf0f1' : '#2c3e50', marginBottom: '2rem' }}>
        My Saved Recipes ({savedItems.length})
      </h1>

      <div style={summaryCardStyle}>
        <h3>📊 Summary</h3>
        <p>Total Cooking Time: {summary.totalTime} minutes</p>
        <p>Total Calories: {summary.totalCalories} kcal</p>
        <p>Average Rating: ⭐ {summary.avgRating}/5</p>
      </div>

      {savedItems.map(item => (
        <div key={item.id} style={cardStyle}>
          <div>
            <h3 style={{ color: '#e74c3c', margin: '0 0 0.5rem 0' }}>{item.title}</h3>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Cooking Time:</strong> {item.cookingTime} min</p>
            <p><strong>Rating:</strong> ⭐ {item.rating}</p>
          </div>
          <button
            onClick={() => onRemove(item.id)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#e74c3c',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Saved;