
import React, { useState } from 'react';
import { Calendar, Plus, Camera, Clock } from 'lucide-react';
import ChildIcon from './ChildIcon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Child {
  id: number;
  name: string;
  color: string;
  gender: 'boy' | 'girl';
}

interface Item {
  id: number;
  name: string;
  category: string;
  childId: number;
  usageDays: number;
  purchaseDate: string;
  size: string;
  imageUrl?: string;
}

const Dashboard = () => {
  const [activeChild, setActiveChild] = useState<number>(1);
  const [children] = useState<Child[]>([
    { id: 1, name: 'あいちゃん', color: 'child-1', gender: 'girl' },
    { id: 2, name: 'ゆうくん', color: 'child-2', gender: 'boy' },
  ]);

  const [items] = useState<Item[]>([
    {
      id: 1,
      name: 'ワンピース（花柄）',
      category: '服',
      childId: 1,
      usageDays: 180,
      purchaseDate: '2024-01-15',
      size: '80cm',
      imageUrl: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'スニーカー',
      category: '靴',
      childId: 1,
      usageDays: 90,
      purchaseDate: '2024-03-01',
      size: '13cm',
      imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=200&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'おもちゃの車',
      category: 'おもちゃ',
      childId: 2,
      usageDays: 365,
      purchaseDate: '2023-06-10',
      size: '-',
      imageUrl: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=200&h=200&fit=crop'
    }
  ]);

  const activeChildItems = items.filter(item => item.childId === activeChild);
  const totalItems = activeChildItems.length;
  const alertItems = activeChildItems.filter(item => item.usageDays > 300);

  const categoryStats = {
    '服': activeChildItems.filter(item => item.category === '服').length,
    '靴': activeChildItems.filter(item => item.category === '靴').length,
    'おもちゃ': activeChildItems.filter(item => item.category === 'おもちゃ').length,
    'ベビー用品': activeChildItems.filter(item => item.category === 'ベビー用品').length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-offwhite to-pastel-cream p-4 space-y-6">
      {/* ヘッダー */}
      <div className="child-card p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 handwritten-text">
          子供用品管理
        </h1>
        
        {/* 子供選択タブ */}
        <div className="flex space-x-3 mb-4">
          {children.map((child) => (
            <ChildIcon
              key={child.id}
              childId={child.id}
              name={child.name}
              gender={child.gender}
              isActive={activeChild === child.id}
              onClick={() => setActiveChild(child.id)}
              size="lg"
            />
          ))}
        </div>
      </div>

      {/* アラート */}
      {alertItems.length > 0 && (
        <Card className="border-2 border-amber-300 bg-amber-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-amber-800 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              使用期間アラート
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {alertItems.map(item => (
                <div key={item.id} className="flex justify-between items-center p-2 bg-white rounded-lg">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-sm text-amber-600">
                    {Math.floor(item.usageDays / 30)}ヶ月使用中
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* 統計カード */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="child-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary mb-1">{totalItems}</div>
            <div className="text-sm text-gray-600">総アイテム数</div>
          </CardContent>
        </Card>
        
        <Card className="child-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-accent mb-1">¥24,800</div>
            <div className="text-sm text-gray-600">今月の購入額</div>
          </CardContent>
        </Card>
      </div>

      {/* カテゴリ別サマリー */}
      <Card className="child-card">
        <CardHeader>
          <CardTitle className="text-lg">カテゴリ別アイテム数</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(categoryStats).map(([category, count]) => (
              <div key={category} className="flex justify-between items-center p-3 bg-pastel-cream rounded-xl">
                <span className="font-medium">{category}</span>
                <span className="text-lg font-bold text-primary">{count}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 最近登録したアイテム */}
      <Card className="child-card">
        <CardHeader>
          <CardTitle className="text-lg">最近登録したアイテム</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {activeChildItems.slice(0, 3).map(item => (
              <div key={item.id} className="flex items-center space-x-3 p-3 bg-white rounded-xl">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  {item.imageUrl ? (
                    <img 
                      src={item.imageUrl} 
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <Camera className="w-6 h-6 text-gray-400" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-500">
                    {item.category} • {item.size}
                  </div>
                </div>
                <div className="text-sm text-gray-400">
                  {Math.floor(item.usageDays / 30)}ヶ月
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* フローティングアクションボタン */}
      <button className="floating-button">
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Dashboard;
