import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { isDarkMode } = useTheme();

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

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ color: '#e74c3c', textAlign: 'center' }}>About Recipe Finder</h1>
        
        <h2>🍳 What is Recipe Finder?</h2>
        <p>
          Recipe Finder is a modern web application that helps food enthusiasts discover,
          explore, and save delicious recipes from around the world. Whether you're a 
          beginner cook or an experienced chef, our app makes it easy to find your next 
          culinary adventure.
        </p>

        <h2>🎯 Our Theme</h2>
        <p>
          We chose a <strong>Culinary Discovery</strong> theme because food brings people 
          together. Our app focuses on providing diverse recipes with clear instructions,
          difficulty levels, and cooking times to help you plan your meals perfectly.
        </p>

        <h2>✨ Main Features</h2>
        <ul>
          <li>Browse 10+ curated recipes from various cuisines</li>
          <li>Search recipes by name for quick access</li>
          <li>Filter by category (Italian, Asian, Indian, etc.)</li>
          <li>Save your favorite recipes to a personal collection</li>
          <li>View detailed recipe information including ingredients</li>
          <li>Dark mode support for comfortable viewing</li>
          <li>Responsive design that works on all devices</li>
        </ul>

        <h2>🛠️ Built With</h2>
        <ul>
          <li>React 18 with Hooks</li>
          <li>React Router for navigation</li>
          <li>Context API for theme management</li>
          <li>Custom CSS for styling</li>
        </ul>

        <h2>👨‍🍳 Happy Cooking!</h2>
        <p>
          Start exploring recipes today and build your personal cookbook. Remember,
          the best ingredient is always love for cooking! ❤️
        </p>
      </div>
    </div>
  );
};

export default About;