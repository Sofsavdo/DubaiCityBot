import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import UsersManagement from './components/UsersManagement';
import EmpireManagement from './components/EmpireManagement';
import SkinsManagement from './components/SkinsManagement';
import TasksManagement from './components/TasksManagement';
import PricesManagement from './components/PricesManagement';
import NotificationsManagement from './components/NotificationsManagement';
import MarketManagement from './components/MarketManagement';
import AssetsManagement from './components/AssetsManagement';
import PromoCodesManagement from './components/PromoCodesManagement';
import ProjectsManagement from './components/ProjectsManagement';
import TeamManagement from './components/TeamManagement';
import ProfileManagement from './components/ProfileManagement';
import ReportsManagement from './components/ReportsManagement';
import StatisticsManagement from './components/StatisticsManagement';
import Settings from './components/Settings';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <UsersManagement />;
      case 'empire':
        return <EmpireManagement />;
      case 'skins':
        return <SkinsManagement />;
      case 'tasks':
        return <TasksManagement />;
      case 'prices':
        return <PricesManagement />;
      case 'notifications':
        return <NotificationsManagement />;
      case 'market':
        return <MarketManagement />;
      case 'assets':
        return <AssetsManagement />;
      case 'promocodes':
        return <PromoCodesManagement />;
      case 'projects':
        return <ProjectsManagement />;
      case 'team':
        return <TeamManagement />;
      case 'profile':
        return <ProfileManagement />;
      case 'reports':
        return <ReportsManagement />;
      case 'statistics':
        return <StatisticsManagement />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col ml-64">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;