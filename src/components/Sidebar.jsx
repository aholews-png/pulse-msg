import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMessageCircle, FiPhone, FiUsers, FiSettings, FiLogOut, FiUser, FiMenu, FiX } from 'react-icons/fi';
import './Sidebar.css';

function Sidebar({ onLogout, user }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', icon: FiMessageCircle, label: 'Сообщения' },
    { path: '/contacts', icon: FiUsers, label: 'Контакты' },
    { path: '/calls', icon: FiPhone, label: 'Звонки' },
    { path: '/settings', icon: FiSettings, label: 'Настройки' },
  ];

  return (
    <>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <div className="pulse-dot"></div>
            <span>Pulse</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <IconComponent size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <Link to="/profile" className={`nav-item ${isActive('/profile') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            <FiUser size={20} />
            <div className="user-info">
              <div className="user-name">{user?.username || 'User'}</div>
              <div className="user-email">{user?.email}</div>
            </div>
          </Link>
          <button className="logout-btn" onClick={onLogout}>
            <FiLogOut size={20} />
            <span>Выход</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
