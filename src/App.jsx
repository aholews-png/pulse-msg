import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ChatListPage from './pages/ChatListPage';
import ChatPage from './pages/ChatPage';
import ContactsPage from './pages/ContactsPage';
import CallsPage from './pages/CallsPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import './App.css';

function App() {
  const { isAuthenticated, token, initializeStore } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeStore();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="pulse-logo">
          <div className="pulse-circle"></div>
          <span>Pulse</span>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<LoginPage />} />
          </>
        ) : (
          <Route element={<Layout />}>
            <Route path="/" element={<ChatListPage />} />
            <Route path="/chat/:chatId" element={<ChatPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/calls" element={<CallsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;
