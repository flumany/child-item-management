
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

  // 画像に合わせた配色
  const getBgColor = () => {
    if (childId === 1) return 'bg-pink-200'; // あいちゃん - ピンク
    if (childId === 2) return 'bg-blue-200'; // ゆうくん - 水色
    return 'bg-gray-200';
  };

  // 可愛いバランスの取れた子どもキャラクター
  const getChildIllustration = () => {
    if (gender === 'boy') {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* 顔のベース */}
          <div className="w-8 h-8 bg-orange-100 rounded-full relative">
            {/* 髪の毛 */}
            <div className="absolute -top-1 left-1 right-1 h-3 bg-amber-700 rounded-t-full"></div>
            <div className="absolute top-0 left-0 w-2 h-2 bg-amber-700 rounded-full"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-amber-700 rounded-full"></div>
            
            {/* 目 */}
            <div className="absolute top-4 left-2 w-1 h-1 bg-black rounded-full"></div>
            <div className="absolute top-4 right-2 w-1 h-1 bg-black rounded-full"></div>
            
            {/* 笑顔の口 */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-1 border-b-2 border-black rounded-full"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* 顔のベース */}
          <div className="w-8 h-8 bg-orange-100 rounded-full relative">
            {/* 髪の毛（女の子用） */}
            <div className="absolute -top-1 left-0 right-0 h-4 bg-amber-600 rounded-t-full"></div>
            <div className="absolute top-1 left-0 w-2 h-3 bg-amber-600 rounded-l-full"></div>
            <div className="absolute top-1 right-0 w-2 h-3 bg-amber-600 rounded-r-full"></div>
            
            {/* 目 */}
            <div className="absolute top-4 left-2 w-1 h-1 bg-black rounded-full"></div>
            <div className="absolute top-4 right-2 w-1 h-1 bg-black rounded-full"></div>
            
            {/* 笑顔の口 */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-1 border-b-2 border-black rounded-full"></div>
            
            {/* ほっぺの赤み */}
            <div className="absolute bottom-3 left-1 w-1 h-0.5 bg-pink-300 rounded-full opacity-70"></div>
            <div className="absolute bottom-3 right-1 w-1 h-0.5 bg-pink-300 rounded-full opacity-70"></div>
            
            {/* リボン */}
            <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-pink-400 rounded-sm"></div>
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
        ${getBgColor()}
        rounded-full 
        flex items-center justify-center 
        font-bold text-gray-700
        shadow-lg hover:shadow-xl 
        transition-all duration-300 
        hover:scale-110
        ${isActive ? 'ring-4 ring-white ring-opacity-50 scale-110' : ''}
        relative overflow-hidden
      `}
    >
      {getChildIllustration()}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 text-xs py-0.5 text-center text-white">
        {name.charAt(0)}
      </div>
    </button>
  );
};

export default ChildIcon;
