const express = require('express');
const router = express.Router();
const { admin } = require('../config/firebase');
const { getUserStats } = require('../services/firestore');

/**
 * Middleware to verify Firebase ID token
 */
async function authenticateUser(req, res, next) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                error: 'No authentication token provided'
            });
        }

        const token = authHeader.split('Bearer ')[1];
        const decodedToken = await admin.auth().verifyIdToken(token);

        req.user = decodedToken;
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(401).json({
            success: false,
            error: 'Invalid authentication token'
        });
    }
}

/**
 * POST /api/auth/verify
 * Verify Firebase ID token
 */
router.post('/verify', async (req, res) => {
    try {
        const { token } = req.body;

        if (!token) {
            return res.status(400).json({
                success: false,
                error: 'Token is required'
            });
        }

        const decodedToken = await admin.auth().verifyIdToken(token);

        res.json({
            success: true,
            data: {
                uid: decodedToken.uid,
                email: decodedToken.email
            }
        });
    } catch (error) {
        console.error('Token verification error:', error);
        res.status(401).json({
            success: false,
            error: 'Invalid token'
        });
    }
});

/**
 * GET /api/auth/user/:userId
 * Get user profile and stats
 */
router.get('/user/:userId', async (req, res) => {
    try {
        const { userId } = req.params;

        // Get user stats from Firestore
        const stats = await getUserStats(userId);

        // Get user info from Firebase Auth
        let userInfo = {};
        try {
            const userRecord = await admin.auth().getUser(userId);
            userInfo = {
                email: userRecord.email,
                displayName: userRecord.displayName || userRecord.email.split('@')[0]
            };
        } catch (error) {
            console.error('Error fetching user info:', error);
        }

        res.json({
            success: true,
            data: {
                ...userInfo,
                ...stats
            }
        });
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch user data'
        });
    }
});

module.exports = router;
module.exports.authenticateUser = authenticateUser;
