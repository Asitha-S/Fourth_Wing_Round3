const axios = require('axios');

async function testStart() {
    try {
        const API_URL = process.env.API_URL || 'http://localhost:5001';
        console.log(`Testing /api/submissions/start on ${API_URL}...`);
        const res = await axios.post(`${API_URL}/api/submissions/start`, {
            teamName: 'TestTeam'
        });
        console.log('Response:', JSON.stringify(res.data, null, 2));
    } catch (err) {
        console.error('Error:', err.message);
        if (err.response) {
            console.error('Status:', err.response.status);
            console.error('Data:', JSON.stringify(err.response.data, null, 2));
        }
    }
}

testStart();
