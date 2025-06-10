
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

  // シンプルな手描き風キャラクター
  const getChildIllustration = () => {
    if (gender === 'boy') {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* 基本の顔 */}
          <div className="w-full h-full rounded-full flex items-center justify-center relative">
            {/* 髪の毛（上部の線） */}
            <div className="absolute top-1 w-6 h-1 border-t-2 border-black rounded-full transform rotate-3"></div>
            <div className="absolute top-1.5 left-2 w-2 h-0.5 border-t-2 border-black rounded-full transform -rotate-12"></div>
            <div className="absolute top-1.5 right-2 w-2 h-0.5 border-t-2 border-black rounded-full transform rotate-12"></div>
            
            {/* 目 */}
            <div className="absolute top-3 flex space-x-2">
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-black rounded-full"></div>
            </div>
            
            {/* 笑顔の口 */}
            <div className="absolute bottom-3 w-3 h-1.5 border-b-2 border-black rounded-full"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* 基本の顔 */}
          <div className="w-full h-full rounded-full flex items-center justify-center relative">
            {/* 髪の毛（女の子用、カールした線） */}
            <div className="absolute top-0.5 w-5 h-2 border-t-2 border-black rounded-t-full transform -rotate-6"></div>
            <div className="absolute top-1 left-1 w-2 h-2 border-l-2 border-black rounded-full transform rotate-45"></div>
            <div className="absolute top-1 right-1 w-2 h-2 border-r-2 border-black rounded-full transform -rotate-45"></div>
            
            {/* 目（少し優しい表情） */}
            <div className="absolute top-3 flex space-x-2">
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-black rounded-full"></div>
            </div>
            
            {/* 笑顔の口 */}
            <div className="absolute bottom-3 w-3 h-1.5 border-b-2 border-black rounded-full"></div>
            
            {/* ほっぺの赤み */}
            <div className="absolute bottom-4 left-1 w-1 h-1 bg-pink-300 rounded-full opacity-60"></div>
            <div className="absolute bottom-4 right-1 w-1 h-1 bg-pink-300 rounded-full opacity-60"></div>
          </div>
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
