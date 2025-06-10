
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

  // 性別に応じたバランスの良いかわいい子どもキャラクター
  const getChildIllustration = () => {
    if (gender === 'boy') {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* 髪 */}
          <div className="absolute top-2 w-7 h-3 bg-amber-800 rounded-t-full"></div>
          {/* 顔 */}
          <div className="absolute top-3 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
            {/* 目 */}
            <div className="absolute top-1.5 flex space-x-1.5">
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-black rounded-full"></div>
            </div>
            {/* 口 */}
            <div className="absolute bottom-1 w-1.5 h-0.5 bg-red-400 rounded-full"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* 髪（女の子用のロングヘア） */}
          <div className="absolute top-2 w-7 h-4 bg-amber-600 rounded-t-full"></div>
          {/* サイドの髪 */}
          <div className="absolute top-3 left-1.5 w-1.5 h-2 bg-amber-600 rounded-full"></div>
          <div className="absolute top-3 right-1.5 w-1.5 h-2 bg-amber-600 rounded-full"></div>
          {/* 顔 */}
          <div className="absolute top-3 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
            {/* 目 */}
            <div className="absolute top-1.5 flex space-x-1.5">
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-black rounded-full"></div>
            </div>
            {/* 口 */}
            <div className="absolute bottom-1 w-1.5 h-0.5 bg-red-400 rounded-full"></div>
          </div>
          {/* リボン */}
          <div className="absolute top-2 w-2 h-1 bg-pink-400 rounded-sm"></div>
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
