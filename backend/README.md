# LeetCode Backend

Backend server for the LeetCode mockup with code execution capabilities.

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Edit `.env` and add your configuration:

```env
PORT=5000
FRONTEND_URL=http://localhost:5173

# Judge0 RapidAPI Configuration
JUDGE0_API_KEY=your_rapidapi_key_here
JUDGE0_HOST=judge0-ce.p.rapidapi.com

# Firebase Configuration
FIREBASE_PROJECT_ID=your_firebase_project_id
```

#### Getting Judge0 API Key (RapidAPI):
1. Go to https://rapidapi.com/judge0-official/api/judge0-ce
2. Sign up / Log in
3. Subscribe to the free tier (50 requests/day)
4. Copy your API key from the dashboard

### 3. Firebase Setup

1. Download your `serviceAccountKey.json` from Firebase Console:
   - Go to Project Settings > Service Accounts
   - Click "Generate New Private Key"
   
2. Place `serviceAccountKey.json` in the `backend` directory

3. Update `FIREBASE_PROJECT_ID` in `.env`

### 4. Seed Database

Populate Firestore with problems:
```bash
node scripts/seedProblems.js
```

### 5. Start Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### Problems
- `GET /api/problems` - Get all problems (supports `?difficulty=Easy&search=two`)
- `GET /api/problems/:id` - Get single problem

### Submissions
- `POST /api/submissions/run` - Run code with sample test cases
- `POST /api/submissions/submit` - Submit code for all test cases
- `GET /api/submissions/history/:userId/:problemId` - Get submission history

### Authentication
- `POST /api/auth/verify` - Verify Firebase token
- `GET /api/auth/user/:userId` - Get user stats

## Project Structure

```
backend/
├── config/
│   └── firebase.js          # Firebase initialization
├── routes/
│   ├── problems.js          # Problem endpoints
│   ├── submissions.js       # Submission endpoints
│   └── auth.js              # Auth endpoints
├── services/
│   ├── firestore.js         # Firestore helper functions
│   └── judge0.js            # Judge0 code execution
├── scripts/
│   └── seedProblems.js      # Database seeding
├── server.js                # Main Express server
├── package.json
└── .env
```

## Testing

Check server health:
```bash
curl http://localhost:5000/health
```

Test Judge0 connection:
```bash
node -e "require('./services/judge0').testConnection()"
```
