'use client';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  const base = 'px-4 py-2 rounded-2xl font-medium transition';
  const styles =
    variant === 'primary'
      ? 'bg-red-500 text-white hover:bg-red-600'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
};
