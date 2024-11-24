import React from 'react'

const Button: React.FC<any> = ({children, onClick, type, className}) => {
    return (
      <button 
      type={type} 
      onClick={onClick} 
      className={`border text-xl mx-auto font-semibold rounded-lg text-white p-2 bg-secondary ${className}`} 
      >
        {children}
      </button>
    );
  };
  
  export default Button;