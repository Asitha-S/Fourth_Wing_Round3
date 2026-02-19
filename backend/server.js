const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import routes
const problemsRouter = require('./routes/problems');
const submissionsRouter = require('./routes/submissions');
const authRouter = require('./routes/auth');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: true, // Allow all origins for development
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// API routes
app.use('/api/problems', problemsRouter);
app.use('/api/submissions', submissionsRouter);
app.use('/api/auth', authRouter);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'Route not found'
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(err.status || 500).json({
        success: false,
        error: err.message || 'Internal server error'
    });
});

// Start server
app.listen(PORT, () => {
    console.log('🚀 LeetCode Backend Server');
    console.log(`📡 Server running on port ${PORT}`);
    console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
    console.log(`⚡ Judge0 Host: ${process.env.JUDGE0_HOST || 'judge0-ce.p.rapidapi.com'}`);
    console.log(`🔥 Firebase Project: ${process.env.FIREBASE_PROJECT_ID || 'Not configured'}`);
    console.log('');
    console.log('Available endpoints:');
    console.log('  GET  /health');
    console.log('  GET  /api/problems');
    console.log('  GET  /api/problems/:id');
    console.log('  POST /api/submissions/run');
    console.log('  POST /api/submissions/submit');
    console.log('  GET  /api/submissions/history/:userId/:problemId');
    console.log('  POST /api/auth/verify');
    console.log('  GET  /api/auth/user/:userId');
});

module.exports = app;
