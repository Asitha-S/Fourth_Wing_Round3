import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Request interceptor to add auth token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for error handling
api.interceptors.response.use(
    (response) => response.data,
    (error) => {
        console.error('API Error:', error.response?.data || error.message);
        return Promise.reject(error.response?.data || error);
    }
);

// Problem APIs
export const problemsAPI = {
    getAll: (filters = {}) => {
        const params = new URLSearchParams();
        if (filters.difficulty && filters.difficulty !== 'All') {
            params.append('difficulty', filters.difficulty);
        }
        if (filters.search) {
            params.append('search', filters.search);
        }
        return api.get(`/problems?${params.toString()}`);
    },

    getById: (id) => api.get(`/problems/${id}`)
};

// Submission APIs
export const submissionsAPI = {
    run: (problemId, code, language) =>
        api.post('/submissions/run', { problemId, code, language }),

    submit: (problemId, code, language, userId) =>
        api.post('/submissions/submit', { problemId, code, language, userId }),

    getHistory: (userId, problemId) =>
        api.get(`/submissions/history/${userId}/${problemId}`)
};

// Auth APIs
export const authAPI = {
    verify: (token) => api.post('/auth/verify', { token }),

    getUser: (userId) => api.get(`/auth/user/${userId}`)
};

export default api;
