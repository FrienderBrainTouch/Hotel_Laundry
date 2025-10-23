import React from 'react';

const StatsCards = () => {
  const stats = [
    {
      title: '전체 매장 수',
      value: '24',
      change: '+2',
      changeType: 'positive',
      icon: '🏪',
      color: 'blue',
    },
    {
      title: '모집 중',
      value: '8',
      change: '+1',
      changeType: 'positive',
      icon: '📢',
      color: 'green',
    },
    {
      title: '준비 중',
      value: '6',
      change: '0',
      changeType: 'neutral',
      icon: '🔧',
      color: 'yellow',
    },
    {
      title: '운영 완료',
      value: '10',
      change: '+1',
      changeType: 'positive',
      icon: '✅',
      color: 'purple',
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-brand-light-blue text-brand-blue',
      green: 'bg-green-50 text-green-600',
      yellow: 'bg-yellow-50 text-yellow-600',
      purple: 'bg-purple-50 text-purple-600',
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-full ${getColorClasses(stat.color)}`}>
              <span className="text-2xl">{stat.icon}</span>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span
              className={`text-sm font-medium ${
                stat.changeType === 'positive'
                  ? 'text-green-600'
                  : stat.changeType === 'negative'
                  ? 'text-red-600'
                  : 'text-gray-600'
              }`}
            >
              {stat.changeType === 'positive' && '+'}
              {stat.change} 이번 주
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
