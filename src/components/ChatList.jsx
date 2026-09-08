import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useChatStore } from '../store/chatStore';
import { useAuthStore } from '../store/authStore';
import './ChatList.css';

function ChatList() {
  const { chats, fetchChats, loading } = useChatStore();
  const { token } = useAuthStore();

  useEffect(() => {
    if (token) {
      fetchChats(token);
    }
  }, [token]);

  if (loading) {
    return <div className="chat-list-loading">Загрузка чатов...</div>;
  }

  return (
    <div className="chat-list">
      <div className="chat-list-header">
        <h2>Сообщения</h2>
        <button className="new-chat-btn">+ Новый чат</button>
      </div>
      <div className="chat-list-items">
        {chats.length === 0 ? (
          <div className="empty-state">Нет активных чатов</div>
        ) : (
          chats.map((chat) => (
            <Link key={chat.id} to={`/chat/${chat.id}`} className="chat-item">
              <div className="chat-avatar">{chat.name?.[0] || 'C'}</div>
              <div className="chat-info">
                <div className="chat-name">{chat.name}</div>
                <div className="chat-preview">{chat.lastMessage}</div>
              </div>
              <div className="chat-time">{chat.lastMessageTime}</div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default ChatList;
