const axios = require('axios');

async function testRun() {
    try {
        const API_URL = process.env.API_URL || 'http://localhost:5001';
        console.log(`Testing /api/submissions/run on ${API_URL}...`);
        const res = await axios.post(`${API_URL}/api/submissions/run`, {
            problemId: 'issue-001',
            language: 'C',
            code: '#include <stdio.h>\\nint main() { printf("Hello"); return 0; }'
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

testRun();
