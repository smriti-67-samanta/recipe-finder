import React from 'react';

const FocusSearchButton = ({ inputRef }) => {
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <button
      onClick={handleFocus}
      style={{
        padding: '0.5rem 1rem',
        backgroundColor: '#f39c12',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 'bold'
      }}
    >
      🔍 Focus Search
    </button>
  );
};

export default FocusSearchButton;