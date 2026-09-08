import React, { useState } from 'react';
import './SettingsPage.css';

function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    twoFactor: false,
    onlineStatus: true,
  });

  const handleToggle = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <div className="settings-page">
      <div className="settings-container">
        <div className="settings-header">
          <h1>Настройки</h1>
        </div>

        <div className="settings-sections">
          <div className="settings-section">
            <h2>Безопасность</h2>
            <div className="settings-item">
              <div className="setting-info">
                <div className="setting-label">Двухфакторная аутентификация</div>
                <div className="setting-description">
                  Защитите свой аккаунт с помощью 2FA
                </div>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.twoFactor}
                  onChange={() => handleToggle('twoFactor')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>

          <div className="settings-section">
            <h2>Уведомления</h2>
            <div className="settings-item">
              <div className="setting-info">
                <div className="setting-label">Включить уведомления</div>
                <div className="setting-description">
                  Получайте уведомления о новых сообщениях
                </div>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={() => handleToggle('notifications')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="settings-item">
              <div className="setting-info">
                <div className="setting-label">Статус онлайн</div>
                <div className="setting-description">
                  Показывать свой статус другим пользователям
                </div>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.onlineStatus}
                  onChange={() => handleToggle('onlineStatus')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>

          <div className="settings-section">
            <h2>Внешний вид</h2>
            <div className="settings-item">
              <div className="setting-info">
                <div className="setting-label">Тёмный режим</div>
                <div className="setting-description">
                  Используйте тёмную тему приложения
                </div>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={settings.darkMode}
                  onChange={() => handleToggle('darkMode')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
