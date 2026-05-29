import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const NotFound = () => {
  const { isDarkMode } = useTheme();

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: isDarkMode ? '#1a1a2e' : '#f5f5f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const cardStyle = {
    textAlign: 'center',
    backgroundColor: isDarkMode ? '#16213e' : '#fff',
    padding: '3rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ fontSize: '6rem', margin: '0', color: '#e74c3c' }}>404</h1>
        <h2 style={{ marginBottom: '1rem' }}>Page Not Found</h2>
        <p style={{ marginBottom: '2rem', color: isDarkMode ? '#bdc3c7' : '#7f8c8d' }}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/">
          <button style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#3498db',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}>
            🏠 Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;