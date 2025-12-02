import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 border border-transparent",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10",
    outline: "bg-transparent border border-blue-500/50 text-blue-400 hover:border-blue-400 hover:text-blue-300"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};