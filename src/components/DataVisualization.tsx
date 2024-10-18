import React from 'react';

interface DataVisualizationProps {
  data: any;
  activeTab: 'map' | 'chart' | 'table';
}

const DataVisualization: React.FC<DataVisualizationProps> = ({ data, activeTab }) => {
  const renderMap = () => (
    <div className="bg-gray-200 h-96 flex items-center justify-center">
      <p className="text-gray-600">Map visualization placeholder</p>
    </div>
  );

  const renderChart = () => (
    <div className="bg-gray-200 h-96 flex items-center justify-center">
      <p className="text-gray-600">Chart visualization placeholder</p>
    </div>
  );

  const renderTable = () => (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Metric
          </th>
          <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Value
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr key={key}>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
              {key}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
              {value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      {activeTab === 'map' && renderMap()}
      {activeTab === 'chart' && renderChart()}
      {activeTab === 'table' && renderTable()}
    </div>
  );
};

export default DataVisualization;