
import React from 'react';

interface ChildIconProps {
  childId: number;
  name: string;
  isActive?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

const ChildIcon: React.FC<ChildIconProps> = ({ 
  childId, 
  name, 
  isActive = false, 
  onClick,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-base'
  };

  const colorClass = `bg-child-${childId}`;

  return (
    <button
      onClick={onClick}
      className={`
        ${sizeClasses[size]} 
        ${colorClass}
        rounded-full 
        flex items-center justify-center 
        font-bold text-white 
        shadow-lg hover:shadow-xl 
        transition-all duration-300 
        hover:scale-110
        ${isActive ? 'ring-4 ring-white ring-opacity-50 scale-110' : ''}
      `}
    >
      {name.charAt(0)}
    </button>
  );
};

export default ChildIcon;
