import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ActiveSaleOrdersPage from './pages/ActiveSaleOrdersPage';
import CompletedSaleOrdersPage from './pages/CompleteSalePrdersPage';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <DarkModeToggle />
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/active-sales" /> : <LoginPage onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/active-sales" element={isAuthenticated ? <ActiveSaleOrdersPage /> : <Navigate to="/login" />} />
        <Route path="/completed-sales" element={isAuthenticated ? <CompletedSaleOrdersPage /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
