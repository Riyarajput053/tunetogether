const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

// Helper function to get auth token from localStorage (for dev) or cookies
const getAuthToken = () => {
  // Try localStorage first (for dev)
  const token = localStorage.getItem('access_token');
  if (token) return token;
  // Cookies are automatically sent by browser
  return null;
};

// Helper function to set auth token
const setAuthToken = (token) => {
  localStorage.setItem('access_token', token);
};

// Helper function to remove auth token
const removeAuthToken = () => {
  localStorage.removeItem('access_token');
};

export const api = {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const token = getAuthToken();
    
    const config = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      credentials: 'include', // Include cookies
    };

    // Add Authorization header if token exists (for localStorage fallback)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.detail || 'An error occurred');
      }
      
      return data;
    } catch (error) {
      throw error;
    }
  },

  async signup(userData) {
    const data = await this.request('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    return data;
  },

  async login(userData) {
    const data = await this.request('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    // Store token in localStorage as fallback
    if (data.access_token) {
      setAuthToken(data.access_token);
    }
    return data;
  },

  async logout() {
    try {
      await this.request('/api/auth/logout', {
        method: 'POST',
      });
    } finally {
      removeAuthToken();
    }
  },

  async getCurrentUser() {
    const data = await this.request('/api/auth/me');
    return data;
  },
};

export { getAuthToken, setAuthToken, removeAuthToken };

