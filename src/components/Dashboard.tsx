
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
      usageDays: 0,
      purchaseDate: '2024-06-13',
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
      name: 'ベビーチェア',
      category: 'ベビー用品',
      childId: 2,
      usageDays: 365,
      purchaseDate: '2023-06-10',
      size: '-',
      imageUrl: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=200&h=200&fit=crop'
    }
  ]);

  const activeChildItems = items.filter(item => item.childId === activeChild);
  const totalItems = activeChild === 1 ? 3 : 1;
  const alertItems = activeChildItems.filter(item => item.usageDays > 300);

  const categoryStats = activeChild === 1 ? {
    '服': 1,
    '靴': 1,
    'おもちゃ': 0,
    'ベビー用品': 1,
  } : {
    '服': 0,
    '靴': 0,
    'おもちゃ': 1,
    'ベビー用品': 1,
  };

  const monthlyPurchaseAmount = activeChild === 1 ? 2780 : 34980;

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
      {activeChild === 2 && (
        <Card className="border-2 border-amber-300 bg-amber-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-amber-800 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              使用期間アラート
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                <span className="font-medium">おもちゃの車</span>
                <span className="text-sm text-amber-600">
                  12ヶ月使用中
                </span>
              </div>
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
            <div className="text-2xl font-bold text-accent mb-1">¥{monthlyPurchaseAmount.toLocaleString()}</div>
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
            {activeChild === 1 ? (
              <>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-xl">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop"
                      alt="ワンピース（花柄）"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">ワンピース（花柄）</div>
                    <div className="text-sm text-gray-500">
                      服 • 80cm
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    0ヶ月
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-xl">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=200&h=200&fit=crop"
                      alt="スニーカー"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">スニーカー</div>
                    <div className="text-sm text-gray-500">
                      靴 • 13cm
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    3ヶ月
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3 p-3 bg-white rounded-xl">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=200&h=200&fit=crop"
                    alt="ベビーチェア"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-medium">ベビーチェア</div>
                  <div className="text-sm text-gray-500">
                    ベビー用品 • -
                  </div>
                </div>
                <div className="text-sm text-gray-400">
                  12ヶ月
                </div>
              </div>
            )}
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
