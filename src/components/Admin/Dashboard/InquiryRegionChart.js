import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Chart.js 등록
ChartJS.register(ArcElement, Tooltip, Legend);

const InquiryRegionChart = () => {
  const data = [
    { region: '서울시', count: 45, percentage: 35 },
    { region: '경기도', count: 28, percentage: 22 },
    { region: '부산광역시', count: 20, percentage: 16 },
    { region: '대구광역시', count: 15, percentage: 12 },
    { region: '인천광역시', count: 12, percentage: 9 },
    { region: '기타', count: 8, percentage: 6 },
  ];

  const chartData = {
    labels: data.map((item) => item.region),
    datasets: [
      {
        data: data.map((item) => item.count),
        backgroundColor: [
          '#102254', // brand-blue
          '#3b82f6', // blue-500
          '#10b981', // green-500
          '#f59e0b', // yellow-500
          '#f97316', // orange-500
          '#6b7280', // gray-500
        ],
        borderColor: ['#102254', '#3b82f6', '#10b981', '#f59e0b', '#f97316', '#6b7280'],
        borderWidth: 2,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const item = data[context.dataIndex];
            return `${item.region}: ${item.count}건 (${item.percentage}%)`;
          },
        },
      },
    },
    cutout: '60%',
  };

  return (
    <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 lg:mb-4">
        지역별 문의 비율
      </h3>
      <div className="flex items-center justify-center mb-3 lg:mb-4">
        <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
          <Doughnut data={chartData} options={options} />
        </div>
      </div>

      {/* 범례 */}
      <div className="space-y-1.5 lg:space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div
                className="w-3 h-3 lg:w-4 lg:h-4 rounded-full"
                style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}
              ></div>
              <span className="text-xs lg:text-sm font-medium text-gray-700 truncate">
                {item.region}
              </span>
            </div>
            <div className="text-xs lg:text-sm text-gray-600 flex-shrink-0">
              {item.count}건 ({item.percentage}%)
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InquiryRegionChart;
