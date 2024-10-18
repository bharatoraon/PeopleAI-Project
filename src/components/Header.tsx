import React from 'react';
import { Building2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center">
        <Building2 className="mr-2" size={32} />
        <h1 className="text-2xl font-bold">AI City Engine Platform</h1>
      </div>
    </header>
  );
};

export default Header;