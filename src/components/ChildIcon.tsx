
import React from 'react';

interface ChildIconProps {
  childId: number;
  name: string;
  gender: 'boy' | 'girl';
  isActive?: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

const ChildIcon: React.FC<ChildIconProps> = ({ 
  childId, 
  name, 
  gender,
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

  // 性別に応じたミニマルなイラスト
  const getChildIllustration = () => {
    if (gender === 'boy') {
      return (
        <div className="text-white text-xl">
          ◉
        </div>
      );
    } else {
      return (
        <div className="text-white text-xl">
          ◯
        </div>
      );
    }
  };

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
        relative overflow-hidden
      `}
    >
      {getChildIllustration()}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 text-xs py-0.5 text-center">
        {name.charAt(0)}
      </div>
    </button>
  );
};

export default ChildIcon;
