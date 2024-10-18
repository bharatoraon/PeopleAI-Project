import React, { useState } from 'react';
import Header from './components/Header';
import FileUpload from './components/FileUpload';
import DataVisualization from './components/DataVisualization';
import AIChat from './components/AIChat';
import { MapIcon, BarChart3Icon, TableIcon } from 'lucide-react';

function App() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [extractedData, setExtractedData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'map' | 'chart' | 'table'>('map');

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    // Simulating data extraction (replace with actual API call)
    setTimeout(() => {
      setExtractedData({
        population: 500000,
        area: 200,
        districts: 10,
        // Add more extracted data as needed
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {!extractedData ? (
          <FileUpload onFileUpload={handleFileUpload} />
        ) : (
          <>
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Extracted Data Visualization</h2>
              <div className="flex space-x-4 mb-4">
                <button
                  className={`flex items-center ${activeTab === 'map' ? 'text-blue-600' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('map')}
                >
                  <MapIcon className="mr-2" /> Map
                </button>
                <button
                  className={`flex items-center ${activeTab === 'chart' ? 'text-blue-600' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('chart')}
                >
                  <BarChart3Icon className="mr-2" /> Chart
                </button>
                <button
                  className={`flex items-center ${activeTab === 'table' ? 'text-blue-600' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('table')}
                >
                  <TableIcon className="mr-2" /> Table
                </button>
              </div>
              <DataVisualization data={extractedData} activeTab={activeTab} />
            </div>
            <AIChat extractedData={extractedData} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;