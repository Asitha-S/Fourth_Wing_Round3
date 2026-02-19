const axios = require('axios');
require('dotenv').config();

// Judge0 language IDs mapping
const LANGUAGE_IDS = {
    'JavaScript': 63,
    'Python3': 71,
    'Java': 62,
    'C++': 54,
    'Go': 60,
    'Rust': 73
};

const JUDGE0_API_KEY = process.env.JUDGE0_API_KEY;
const JUDGE0_HOST = process.env.JUDGE0_HOST || 'judge0-ce.p.rapidapi.com';

/**
 * Execute code with test cases using Judge0
 */
async function executeCode(code, language, testCases) {
    try {
        const languageId = LANGUAGE_IDS[language];

        if (!languageId) {
            throw new Error(`Unsupported language: ${language}`);
        }

        // Execute code for each test case
        const results = [];

        for (const testCase of testCases) {
            const result = await executeTestCase(code, languageId, testCase);
            results.push(result);

            // Stop on first failure for "Run" (not Submit)
            if (testCases.length <= 3 && result.status !== 'Accepted') {
                break;
            }
        }

        // Calculate overall status
        const allPassed = results.every(r => r.status === 'Accepted');
        const testsPassed = results.filter(r => r.status === 'Accepted').length;

        // Calculate average runtime and memory
        const successfulResults = results.filter(r => r.runtime && r.memory);
        const avgRuntime = successfulResults.length > 0
            ? successfulResults.reduce((sum, r) => sum + parseFloat(r.runtime), 0) / successfulResults.length
            : null;
        const avgMemory = successfulResults.length > 0
            ? successfulResults.reduce((sum, r) => sum + parseFloat(r.memory), 0) / successfulResults.length
            : null;

        return {
            status: allPassed ? 'Accepted' : 'Wrong Answer',
            testsPassed,
            totalTests: testCases.length,
            runtime: avgRuntime ? avgRuntime.toFixed(2) : null,
            memory: avgMemory ? avgMemory.toFixed(2) : null,
            results
        };
    } catch (error) {
        console.error('Error executing code:', error);
        throw error;
    }
}

/**
 * Execute a single test case
 */
async function executeTestCase(code, languageId, testCase) {
    try {
        // Submit code to Judge0
        const submissionResponse = await axios.post(
            `https://${JUDGE0_HOST}/submissions?base64_encoded=false&wait=true`,
            {
                source_code: code,
                language_id: languageId,
                stdin: testCase.input,
                expected_output: testCase.expectedOutput
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': JUDGE0_API_KEY,
                    'X-RapidAPI-Host': JUDGE0_HOST
                }
            }
        );

        const submission = submissionResponse.data;

        // Parse the result
        return parseSubmissionResult(submission, testCase);
    } catch (error) {
        console.error('Error executing test case:', error.response?.data || error.message);

        return {
            status: 'Error',
            input: testCase.input,
            expectedOutput: testCase.expectedOutput,
            actualOutput: null,
            error: error.response?.data?.message || error.message
        };
    }
}

/**
 * Parse Judge0 submission result
 */
function parseSubmissionResult(submission, testCase) {
    const statusId = submission.status.id;
    const statusDescription = submission.status.description;

    // Status IDs: 3 = Accepted, 4 = Wrong Answer, 5 = Time Limit Exceeded, 
    // 6 = Compilation Error, 11 = Runtime Error, etc.

    let status;
    if (statusId === 3) {
        status = 'Accepted';
    } else if (statusId === 4) {
        status = 'Wrong Answer';
    } else if (statusId === 5) {
        status = 'Time Limit Exceeded';
    } else if (statusId === 6) {
        status = 'Compilation Error';
    } else if (statusId === 11 || statusId === 12) {
        status = 'Runtime Error';
    } else {
        status = statusDescription;
    }

    return {
        status,
        input: testCase.input,
        expectedOutput: testCase.expectedOutput,
        actualOutput: submission.stdout ? submission.stdout.trim() : null,
        error: submission.stderr || submission.compile_output || null,
        runtime: submission.time, // in seconds
        memory: submission.memory // in KB
    };
}

/**
 * Test Judge0 connection
 */
async function testConnection() {
    try {
        const response = await axios.get(
            `https://${JUDGE0_HOST}/languages`,
            {
                headers: {
                    'X-RapidAPI-Key': JUDGE0_API_KEY,
                    'X-RapidAPI-Host': JUDGE0_HOST
                }
            }
        );

        console.log('✅ Judge0 connection successful!');
        console.log(`Available languages: ${response.data.length}`);
        return true;
    } catch (error) {
        console.error('❌ Judge0 connection failed:', error.message);
        return false;
    }
}

module.exports = {
    executeCode,
    testConnection,
    LANGUAGE_IDS
};
