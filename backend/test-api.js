const axios = require('axios');

async function test() {
    try {
        const API_URL = process.env.API_URL || 'http://localhost:5001';
        console.log('Testing Health...');
        try {
            const health = await axios.get(`${API_URL}/health`);
            console.log('Health:', health.data);
        } catch (e) {
            console.log('Health check failed:', e.message);
        }

        console.log('Testing Backend API with Robust C Solution...');
        const res = await axios.post(`${API_URL}/api/submissions/run`, {
            problemId: 'issue-001',
            language: 'C',
            code: `#include <stdio.h>
#include <string.h>

int main() {
    char input[200];
    if (fgets(input, sizeof(input), stdin) == NULL) return 0;
    
    // Remove newline if present
    input[strcspn(input, "\\n")] = 0;
    // Remove carriage return if present (Windows)
    input[strcspn(input, "\\r")] = 0;

    if (strncmp(input, "addSession", 10) == 0) {
        printf("Session stored");
    } else if (strncmp(input, "getSession", 10) == 0) {
        printf("null");
    } else {
        printf("Unknown input: %s", input);
    }
    return 0;
}`
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

test();
