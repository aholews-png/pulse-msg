import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';
import './ProfilePage.css';

function ProfilePage() {
  const { user, logout } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    bio: user?.bio || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    // API call to save profile
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">{user?.username?.[0] || 'U'}</div>
          <div className="profile-title">
            <h1>{user?.username || 'User'}</h1>
            <p>{user?.email}</p>
          </div>
        </div>

        <div className="profile-content">
          {isEditing ? (
            <div className="profile-form">
              <div className="form-group">
                <label>Имя пользователя</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" value={formData.email} disabled />
              </div>
              <div className="form-group">
                <label>Статус</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Расскажите о себе..."
                ></textarea>
              </div>
              <div className="button-group">
                <button className="save-btn" onClick={handleSave}>
                  Сохранить
                </button>
                <button
                  className="cancel-btn"
                  onClick={() => setIsEditing(false)}
                >
                  Отмена
                </button>
              </div>
            </div>
          ) : (
            <div className="profile-info">
              <div className="info-section">
                <h3>Статус</h3>
                <p>{user?.bio || 'Статус не установлен'}</p>
              </div>
              <button className="edit-btn" onClick={() => setIsEditing(true)}>
                Редактировать профиль
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
