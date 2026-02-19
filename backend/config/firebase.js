const admin = require('firebase-admin');
require('dotenv').config();

// Initialize Firebase Admin SDK
// Make sure to place your serviceAccountKey.json in the backend directory
let serviceAccount;
let db;
let isMockMode = false;

try {
    serviceAccount = require('../serviceAccountKey.json');
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        projectId: process.env.FIREBASE_PROJECT_ID
    });
    db = admin.firestore();
    console.log("✅ Firebase initialized successfully");
} catch (error) {
    console.warn('⚠️ Firebase service account key not found!');
    console.warn('⚠️ Switching to MOCK MODE (In-Memory Database)');
    isMockMode = true;

    // Mock db object to prevent crashes if accessed directly, though services should check isMockMode
    db = {
        collection: () => ({
            doc: () => ({ get: () => ({ exists: false }), set: () => { }, update: () => { } }),
            add: () => ({ id: 'mock-id' }),
            where: () => ({ orderBy: () => ({ limit: () => ({ get: () => ({ forEach: () => { } }) }) }), get: () => ({ forEach: () => { }, size: 0 }) }),
            get: () => ({ forEach: () => { } })
        })
    };
}

module.exports = { admin, db, isMockMode };
