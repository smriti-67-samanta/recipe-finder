import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? '#f39c12' : '#ffffff',  // Changed to always white for visibility
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
    backgroundColor: isActive ? 'rgba(243, 156, 18, 0.2)' : 'transparent'
  });

  return (
    <nav style={{
      backgroundColor: '#2c3e50',  // Fixed dark color that works for both modes
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <NavLink to="/" style={navLinkStyles}>🏠 Home</NavLink>
        <NavLink to="/recipes" style={navLinkStyles}>📖 Recipes</NavLink>
        <NavLink to="/saved" style={navLinkStyles}>💾 Saved</NavLink>
        <NavLink to="/about" style={navLinkStyles}>ℹ️ About</NavLink>
      </div>
      <button
        onClick={toggleTheme}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: isDarkMode ? '#f39c12' : '#ecf0f1',
          color: isDarkMode ? '#2c3e50' : '#2c3e50',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
        }}
      >
        {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;