const axios = require('axios');

async function testRun() {
    try {
        console.log('Testing /api/submissions/run...');
        const res = await axios.post('http://localhost:5001/api/submissions/run', {
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
