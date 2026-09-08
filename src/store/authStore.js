import { create } from 'zustand';

export const useAuthStore = create((set, get) => ({
  isAuthenticated: false,
  user: null,
  token: null,
  loading: false,
  error: null,

  initializeStore: () => {
    const savedToken = localStorage.getItem('authToken');
    const savedUser = localStorage.getItem('user');
    if (savedToken && savedUser) {
      set({
        isAuthenticated: true,
        token: savedToken,
        user: JSON.parse(savedUser),
      });
    }
  },

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.token && data.user) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        set({
          isAuthenticated: true,
          token: data.token,
          user: data.user,
          loading: false,
        });
        return true;
      } else {
        set({ error: data.message || 'Login failed', loading: false });
        return false;
      }
    } catch (err) {
      set({ error: err.message, loading: false });
      return false;
    }
  },

  register: async (email, password, username) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, username }),
      });
      const data = await response.json();
      if (data.token && data.user) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        set({
          isAuthenticated: true,
          token: data.token,
          user: data.user,
          loading: false,
        });
        return true;
      } else {
        set({ error: data.message || 'Registration failed', loading: false });
        return false;
      }
    } catch (err) {
      set({ error: err.message, loading: false });
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    set({
      isAuthenticated: false,
      user: null,
      token: null,
    });
  },

  resetPassword: async (email) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      set({ loading: false });
      return data.success;
    } catch (err) {
      set({ error: err.message, loading: false });
      return false;
    }
  },

  verifyCode: async (email, code, newPassword) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('/api/auth/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code, newPassword }),
      });
      const data = await response.json();
      set({ loading: false });
      return data.success;
    } catch (err) {
      set({ error: err.message, loading: false });
      return false;
    }
  },

  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),
}));
