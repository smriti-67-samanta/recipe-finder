import React, { useState, useMemo, useRef } from 'react';
import { recipesData } from '../data/recipesData';
import RecipeCard from '../components/RecipeCard';
import FocusSearchButton from '../components/FocusSearchButton';
import { useTheme } from '../contexts/ThemeContext';

const Explore = ({ savedItems, onSave, onRemove }) => {
  const { isDarkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const searchInputRef = useRef(null);

  // Get unique categories for filter
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(recipesData.map(recipe => recipe.category))];
    return cats;
  }, []);

  // Filtered list with useMemo for optimization
  const filteredRecipes = useMemo(() => {
    let filtered = recipesData;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(recipe => recipe.category === selectedCategory);
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: isDarkMode ? '#1a1a2e' : '#f5f5f5',
    padding: '2rem'
  };

  const filterBarStyle = {
    backgroundColor: isDarkMode ? '#16213e' : '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    marginBottom: '2rem',
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    alignItems: 'center'
  };

  const inputStyle = {
    padding: '0.75rem',
    fontSize: '1rem',
    border: `1px solid ${isDarkMode ? '#34495e' : '#ddd'}`,
    borderRadius: '4px',
    backgroundColor: isDarkMode ? '#34495e' : '#fff',
    color: isDarkMode ? '#ecf0f1' : '#2c3e50',
    flex: 1,
    minWidth: '200px'
  };

  const selectStyle = {
    padding: '0.75rem',
    fontSize: '1rem',
    border: `1px solid ${isDarkMode ? '#34495e' : '#ddd'}`,
    borderRadius: '4px',
    backgroundColor: isDarkMode ? '#34495e' : '#fff',
    color: isDarkMode ? '#ecf0f1' : '#2c3e50',
    cursor: 'pointer'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem'
  };

  return (
    <div style={containerStyle}>
      <div style={filterBarStyle}>
        <input
          ref={searchInputRef}
          type="text"
          placeholder="🔍 Search recipes by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={inputStyle}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={selectStyle}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <FocusSearchButton inputRef={searchInputRef} />
      </div>

      <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
        <h3 style={{ color: isDarkMode ? '#ecf0f1' : '#2c3e50' }}>
          Showing {filteredRecipes.length} results
        </h3>
      </div>

      {filteredRecipes.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: isDarkMode ? '#ecf0f1' : '#2c3e50' }}>
            No recipes found. Try a different search!
          </p>
        </div>
      ) : (
        <div style={gridStyle}>
          {filteredRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isSaved={savedItems.some(item => item.id === recipe.id)}
              onSave={onSave}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Explore;