const axios = require('axios');
const COMPILER_URL = 'http://localhost:5175';

/**
 * Execute code using the local compiler service
 */
async function executeCode(code, language, testCases) {
    try {
        const formatMap = {
            'Python3': 'python',
            'Java': 'java',
            'C': 'c',
            'C++': 'cpp',
            'Go': 'go',
            'Rust': 'rust'
        };

        const format = formatMap[language];
        if (!format) {
            throw new Error(`Unsupported language: ${language}`);
        }

        // if (format === 'js') {
        //     throw new Error("JavaScript execution not supported in this environment yet.");
        // }

        // The local compiler has a /submit endpoint that runs against multiple test cases
        // We will adapt our request to match its expected format
        // Payload: { format, code, problemId, userId, testcases: [{input, output}] }

        // However, the local compiler's /submit endpoint writes to disk and expects problemId/userId
        // Let's use the /run endpoint for simple execution or /submit for full validation
        // But /submit in local compiler logic is designed for a specific contest structure.

        // Actually, looking at local compiler's index.js:
        // /submit iterates over testcases and checks output.
        // /run executes once with one input.

        // We should use /submit if we want to run multiple test cases and checking.
        // We can mock problemId/userId if they are not strictly checked for existence in FS (they are just used for file paths)

        const response = await axios.post(`${COMPILER_URL}/submit`, {
            format,
            code,
            problemId: 'temp-problem',
            userId: 'temp-user',
            testcases: testCases.map(tc => ({
                input: tc.input,
                output: tc.expectedOutput
            }))
        });

        const result = response.data;

        // Map local compiler result to our expected format
        // Local compiler returns: { success: bool, error: string, detail: string, totalTime: number, finalResult: string }

        if (!result.success && result.error === 'Internal server error') {
            throw new Error(result.detail || 'Compiler server error');
        }

        const runResults = result.testResults || testCases.map(tc => ({
            passed: result.success,
            input: tc.input,
            expectedOutput: tc.expectedOutput,
            actualOutput: result.success ? tc.expectedOutput : result.detail
        }));

        const testsPassedCount = runResults.filter(r => r.passed).length;

        return {
            status: result.success ? 'Accepted' : (result.finalResult || 'Wrong Answer'),
            testsPassed: testsPassedCount,
            totalTests: testCases.length,
            runtime: result.totalTime ? result.totalTime.toFixed(2) : "0.00",
            memory: 0,
            results: runResults.map(r => ({
                passed: r.passed,
                status: r.passed ? 'Accepted' : 'Wrong Answer',
                input: r.input,
                expectedOutput: r.expectedOutput,
                actualOutput: r.actualOutput
            }))
        };

    } catch (error) {
        console.error('Error executing code on local compiler:', error.message);
        throw error;
    }
}

/**
 * Test local compiler connection
 */
async function testConnection() {
    try {
        await axios.get(COMPILER_URL); // Likely 404 but proves server is up
    } catch (error) {
        if (error.code === 'ECONNREFUSED') {
            console.error('❌ Local compiler not running on port 5175');
            return false;
        }
    }
    console.log('✅ Local Compiler connection successful!');
    return true;
}

module.exports = {
    executeCode,
    testConnection
};
