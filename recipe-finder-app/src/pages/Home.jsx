import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Home = () => {
  const { isDarkMode } = useTheme();

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: isDarkMode ? '#1a1a2e' : '#f5f5f5',
    color: isDarkMode ? '#ecf0f1' : '#2c3e50'
  };

  const heroStyle = {
    textAlign: 'center',
    padding: '4rem 2rem',
    backgroundColor: isDarkMode ? '#16213e' : '#e74c3c',
    color: '#fff'
  };

  const sectionStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem'
  };

  const featureCardStyle = {
    backgroundColor: isDarkMode ? '#0f3460' : '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  };

  return (
    <div style={containerStyle}>
      <div style={heroStyle}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🍳 Recipe Finder</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Discover delicious recipes, save your favorites, and become a master chef!
        </p>
        <Link to="/recipes">
          <button style={{
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            backgroundColor: '#f39c12',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Explore Recipes →
          </button>
        </Link>
      </div>

      <div style={sectionStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Why Choose Recipe Finder?</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          <div style={featureCardStyle}>
            <h3>📚 10+ Recipes</h3>
            <p>Explore a diverse collection of recipes from around the world</p>
          </div>
          <div style={featureCardStyle}>
            <h3>🔍 Smart Search</h3>
            <p>Find recipes by name, category, or difficulty level</p>
          </div>
          <div style={featureCardStyle}>
            <h3>💾 Save Favorites</h3>
            <p>Build your personal recipe collection</p>
          </div>
          <div style={featureCardStyle}>
            <h3>🌙 Dark Mode</h3>
            <p>Cook comfortably day or night</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;