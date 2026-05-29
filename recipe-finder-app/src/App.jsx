import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import RecipeDetails from './pages/RecipeDetails';
import Saved from './pages/Saved';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  const [savedItems, setSavedItems] = useState(() => {
    // Load saved items from localStorage
    const saved = localStorage.getItem('savedRecipes');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever savedItems changes
  useEffect(() => {
    localStorage.setItem('savedRecipes', JSON.stringify(savedItems));
  }, [savedItems]);

  // useCallback for saveItem to prevent unnecessary re-renders
  const saveItem = useCallback((item) => {
    setSavedItems(prev => {
      // Check if item already exists
      if (prev.some(saved => saved.id === item.id)) {
        alert('This recipe is already in your saved collection!');
        return prev;
      }
      alert('Recipe saved successfully!');
      return [...prev, item];
    });
  }, []);

  // useCallback for removeItem to prevent unnecessary re-renders
  const removeItem = useCallback((itemId) => {
    setSavedItems(prev => prev.filter(item => item.id !== itemId));
    alert('Recipe removed from saved collection');
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/recipes" 
            element={
              <Explore 
                savedItems={savedItems}
                onSave={saveItem}
                onRemove={removeItem}
              />
            } 
          />
          <Route 
            path="/recipes/:id" 
            element={
              <RecipeDetails 
                savedItems={savedItems}
                onSave={saveItem}
                onRemove={removeItem}
              />
            } 
          />
          <Route 
            path="/saved" 
            element={
              <Saved 
                savedItems={savedItems}
                onRemove={removeItem}
              />
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;