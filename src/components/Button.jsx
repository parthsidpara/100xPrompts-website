import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button 
      onClick={onClick} 
      className={`bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors ${className}`}>
      {children}
    </button>
  );
};

export default Button;
