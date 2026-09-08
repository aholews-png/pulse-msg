import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import Sidebar from './Sidebar';
import './Layout.css';

function Layout() {
  const { logout, user } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="layout">
      <Sidebar onLogout={handleLogout} user={user} />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
