import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useChatStore } from '../store/chatStore';
import { useAuthStore } from '../store/authStore';
import './ChatPage.css';

function ChatPage() {
  const { chatId } = useParams();
  const { messages, fetchMessages, sendMessage, loading } = useChatStore();
  const { token } = useAuthStore();
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    if (chatId && token) {
      fetchMessages(chatId, token);
    }
  }, [chatId, token]);

  const chatMessages = messages[chatId] || [];

  const handleSend = async (e) => {
    e.preventDefault();
    if (messageText.trim() && token) {
      await sendMessage(chatId, messageText, token);
      setMessageText('');
    }
  };

  return (
    <div className="chat-page">
      <div className="messages-container">
        {loading ? (
          <div className="loading">Загрузка сообщений...</div>
        ) : chatMessages.length === 0 ? (
          <div className="empty-messages">Нет сообщений</div>
        ) : (
          <div className="messages-list">
            {chatMessages.map((msg) => (
              <div key={msg.id} className={`message ${msg.sender === 'self' ? 'sent' : 'received'}`}>
                <div className="message-content">{msg.content}</div>
                <div className="message-time">{msg.timestamp}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <form onSubmit={handleSend} className="message-input-form">
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Напишите сообщение..."
          className="message-input"
        />
        <button type="submit" className="send-btn">Отправить</button>
      </form>
    </div>
  );
}

export default ChatPage;
