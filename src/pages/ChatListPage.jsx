import React, { useEffect } from 'react';
import ChatList from '../components/ChatList';
import { useChatStore } from '../store/chatStore';
import './ChatListPage.css';

function ChatListPage() {
  return (
    <div className="chat-list-page">
      <ChatList />
    </div>
  );
}

export default ChatListPage;
