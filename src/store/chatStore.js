import { create } from 'zustand';

export const useChatStore = create((set, get) => ({
  chats: [],
  activeChat: null,
  messages: {},
  loading: false,
  error: null,

  fetchChats: async (token) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('/api/chats', {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      const data = await response.json();
      set({ chats: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  setActiveChat: (chatId) => {
    set({ activeChat: chatId });
  },

  fetchMessages: async (chatId, token) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/chats/${chatId}/messages`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      const messages = await response.json();
      set((state) => ({
        messages: { ...state.messages, [chatId]: messages },
        loading: false,
      }));
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  sendMessage: async (chatId, content, token) => {
    try {
      const response = await fetch(`/api/chats/${chatId}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });
      const message = await response.json();
      set((state) => ({
        messages: {
          ...state.messages,
          [chatId]: [...(state.messages[chatId] || []), message],
        },
      }));
      return message;
    } catch (err) {
      set({ error: err.message });
    }
  },

  createChat: async (participants, token) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('/api/chats', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ participants }),
      });
      const chat = await response.json();
      set((state) => ({
        chats: [...state.chats, chat],
        loading: false,
      }));
      return chat;
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  deleteChat: async (chatId, token) => {
    try {
      await fetch(`/api/chats/${chatId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      set((state) => ({
        chats: state.chats.filter((c) => c.id !== chatId),
      }));
    } catch (err) {
      set({ error: err.message });
    }
  },

  addMessage: (chatId, message) => {
    set((state) => ({
      messages: {
        ...state.messages,
        [chatId]: [...(state.messages[chatId] || []), message],
      },
    }));
  },

  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),
}));
