import React from 'react';
import { useApp } from './context/AppContext';
import { AppLayout } from './components/layout/AppLayout';
import { DashboardPage } from './pages/DashboardPage';
import { ShiftPlanImportPage } from './pages/ShiftPlanImportPage';
import { ShiftCodePage } from './pages/ShiftCodePage';
import { OTImportPage } from './pages/OTImportPage';
import { AttendanceImportPage } from './pages/AttendanceImportPage';
import { AllowancesPage } from './pages/AllowancesPage';
import { TimeSheetPage } from './pages/TimeSheetPage';
import { ExportPDFPage } from './pages/ExportPDFPage';
import { ExportCSVPage } from './pages/ExportCSVPage';
import { UserManagementPage } from './pages/UserManagementPage';
import { SettingsPage } from './pages/SettingsPage';

export const App: React.FC = () => {
  const { activeTab } = useApp();

  const renderActivePage = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardPage />;
      case 'shift-plan-import':
        return <ShiftPlanImportPage />;
      case 'shift-codes':
        return <ShiftCodePage />;
      case 'ot-import':
        return <OTImportPage />;
      case 'attendance-import':
        return <AttendanceImportPage />;
      case 'allowances':
        return <AllowancesPage />;
      case 'timesheet':
        return <TimeSheetPage />;
      case 'export-pdf':
        return <ExportPDFPage />;
      case 'export-csv':
        return <ExportCSVPage />;
      case 'user-mgmt':
        return <UserManagementPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return <AppLayout>{renderActivePage()}</AppLayout>;
};

export default App;