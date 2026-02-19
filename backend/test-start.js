const axios = require('axios');

async function testStart() {
    try {
        console.log('Testing /api/submissions/start...');
        const res = await axios.post('http://localhost:5001/api/submissions/start', {
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
