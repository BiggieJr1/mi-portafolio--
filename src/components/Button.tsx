import type { ButtonProps } from '../types/types';

export const Button = ({ 
  text, 
  onClick, 
  variant = 'primary', 
  disabled = false 
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded ${
        variant === 'primary' 
          ? 'bg-blue-500 hover:bg-blue-600' 
          : 'bg-gray-500 hover:bg-gray-600'
      } text-white disabled:opacity-50`}
    >
      {text}
    </button>
  );
};