const axios = require('axios');

async function test() {
    try {
        console.log('Testing Failure Case...');
        const res = await axios.post('http://localhost:5001/api/submissions/run', {
            problemId: 'issue-001',
            language: 'C',
            code: `#include <stdio.h>
int main() {
    printf("Wrong Output");
    return 0;
}`
        });
        console.log('Response:', JSON.stringify(res.data, null, 2));
    } catch (err) {
        console.error('Error:', err.message);
    }
}

test();
