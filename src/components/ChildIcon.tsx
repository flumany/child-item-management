
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

  // 性別に応じたかわいい子どもキャラクター
  const getChildIllustration = () => {
    if (gender === 'boy') {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* 顔 */}
          <div className="absolute w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
            {/* 目 */}
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-black rounded-full"></div>
            </div>
            {/* 口 */}
            <div className="absolute bottom-2 w-2 h-1 bg-red-400 rounded-full"></div>
          </div>
          {/* 髪 */}
          <div className="absolute top-1 w-6 h-4 bg-amber-800 rounded-t-full"></div>
        </div>
      );
    } else {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* 顔 */}
          <div className="absolute w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
            {/* 目 */}
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-black rounded-full"></div>
            </div>
            {/* 口 */}
            <div className="absolute bottom-2 w-2 h-1 bg-red-400 rounded-full"></div>
          </div>
          {/* 髪（女の子用のツインテール風） */}
          <div className="absolute top-1 w-8 h-4 bg-amber-600 rounded-t-full"></div>
          <div className="absolute top-2 left-0 w-2 h-2 bg-amber-600 rounded-full"></div>
          <div className="absolute top-2 right-0 w-2 h-2 bg-amber-600 rounded-full"></div>
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
