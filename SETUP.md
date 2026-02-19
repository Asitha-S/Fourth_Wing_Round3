# FourthWing Round 3

Complete guide to set up and run the LeetCode mockup with backend code execution.

## 📋 Prerequisites

- Node.js (v16 or higher)
- Firebase account
- RapidAPI account (for Judge0)

## 🚀 Quick Start

### 1. Backend Setup

#### Install Dependencies
```bash
cd backend
npm install
```

#### Configure Environment
```bash
cp .env.example .env
```

Edit `backend/.env`:
```env
PORT=5000
FRONTEND_URL=http://localhost:5173

# Get from https://rapidapi.com/judge0-official/api/judge0-ce
JUDGE0_API_KEY=your_rapidapi_key_here
JUDGE0_HOST=judge0-ce.p.rapidapi.com

# Your Firebase project ID
FIREBASE_PROJECT_ID=your_firebase_project_id
```

#### Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your existing project (or create new one)
3. Go to **Project Settings** > **Service Accounts**
4. Click **"Generate New Private Key"**
5. Save as `serviceAccountKey.json` in the `backend` directory
6. Update `FIREBASE_PROJECT_ID` in `.env`

#### Seed Database
```bash
node scripts/seedProblems.js
```

#### Start Backend Server
```bash
npm run dev
```

Server runs on `http://localhost:5000`

---

### 2. Frontend Setup

#### Install Dependencies
```bash
# From project root
npm install axios firebase
```

#### Configure Environment
```bash
cp .env.example .env
```

Edit `.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

#### Firebase Client Configuration
Edit `src/config/firebase.js` with your Firebase web app config:

1. Go to Firebase Console > Project Settings
2. Scroll to "Your apps" section
3. Click the web app icon (</>)
4. Copy the config object
5. Replace the config in `src/config/firebase.js`

#### Start Frontend
```bash
npm run dev
```

Frontend runs on `http://localhost:5173`

---

## 🔑 Getting API Keys

### Judge0 (RapidAPI)
1. Go to https://rapidapi.com/judge0-official/api/judge0-ce
2. Sign up or log in
3. Click **"Subscribe to Test"**
4. Select **Basic (Free)** plan - 50 requests/day
5. Copy your API key from the dashboard
6. Paste into `backend/.env` as `JUDGE0_API_KEY`

### Firebase
Your existing Firebase project should work. Just need:
- Service account key (`serviceAccountKey.json`) for backend
- Web app config for frontend (`src/config/firebase.js`)

---

## 📁 Project Structure

```
FourthWing/
├── backend/                    # Express.js backend
│   ├── config/
│   │   └── firebase.js        # Firebase Admin SDK
│   ├── routes/
│   │   ├── problems.js        # Problem endpoints
│   │   ├── submissions.js     # Code execution
│   │   └── auth.js            # Authentication
│   ├── services/
│   │   ├── firestore.js       # Database helpers
│   │   └── judge0.js          # Code execution service
│   ├── scripts/
│   │   └── seedProblems.js    # Database seeding
│   ├── server.js              # Main server
│   ├── package.json
│   ├── .env                   # Backend config
│   └── serviceAccountKey.json # Firebase credentials
│
├── src/
│   ├── config/
│   │   └── firebase.js        # Firebase client SDK
│   ├── services/
│   │   └── api.js             # API client
│   └── ...
│
├── leetcode-mockup.jsx        # Main React component
├── package.json
└── .env                       # Frontend config
```

---

## ✅ Verification Steps

### 1. Test Backend
```bash
# Check server health
curl http://localhost:5000/health

# Get problems
curl http://localhost:5000/api/problems

# Get specific problem
curl http://localhost:5000/api/problems/1
```

### 2. Test Frontend
1. Open `http://localhost:5173`
2. You should see the LeetCode interface
3. Problems should load from backend
4. Try clicking "Run" or "Submit" (will need auth first)

---

## 🔧 Next Steps

To fully integrate the frontend with backend:

1. **Update `leetcode-mockup.jsx`** to:
   - Import and use the API service
   - Fetch problems from backend instead of local data
   - Connect Run/Submit buttons to backend
   - Add authentication UI

2. **Add Authentication**:
   - Implement login/signup UI
   - Use Firebase Authentication
   - Store user session

3. **Connect Code Execution**:
   - Update `handleRun()` to call `submissionsAPI.run()`
   - Update `handleSubmit()` to call `submissionsAPI.submit()`
   - Display real execution results

---

## 🐛 Troubleshooting

### Backend won't start
- Check if `serviceAccountKey.json` exists in `backend/`
- Verify `FIREBASE_PROJECT_ID` in `.env`
- Make sure port 5000 is not in use

### Judge0 errors
- Verify your RapidAPI key is correct
- Check you haven't exceeded free tier limit (50/day)
- Test connection: `node -e "require('./services/judge0').testConnection()"`

### CORS errors
- Ensure `FRONTEND_URL` in backend `.env` matches your frontend URL
- Check browser console for specific CORS error messages

---

## 📚 API Documentation

See `backend/README.md` for detailed API endpoint documentation.

---

## 🎉 You're All Set!

Your LeetCode mockup is now ready with:
- ✅ Full backend with code execution
- ✅ Firebase integration
- ✅ Judge0 code execution service
- ✅ 10 seeded problems
- ✅ API endpoints for problems, submissions, and auth

Next: Integrate the frontend to use these backend services!
