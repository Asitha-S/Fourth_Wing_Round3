const { spawn } = require('child_process');
const path = require('path');
const { performance } = require('perf_hooks');

const executeNode = (filepath, input = '', timeoutMs = 5000) => {
    return new Promise((resolve) => {
        const startTime = performance.now();

        const run = spawn('node', [filepath]);

        let stdout = '';
        let stderr = '';
        let isTimeout = false;

        const timeout = setTimeout(() => {
            isTimeout = true;
            run.kill('SIGKILL');
            resolve({ error: 'Time Limit Exceeded' });
        }, timeoutMs);

        if (input) {
            run.stdin.write(input);
        }
        run.stdin.end();

        run.stdout.on('data', (data) => {
            stdout += data.toString();
        });

        run.stderr.on('data', (data) => {
            stderr += data.toString();
        });

        run.on('close', (code) => {
            clearTimeout(timeout);
            if (isTimeout) return;

            const endTime = performance.now();
            const timeTaken = +(endTime - startTime).toFixed(2);

            const resourceUsage = process.resourceUsage();
            const memoryUsedKb = resourceUsage.rss / 1024;

            if (code !== 0) {
                resolve({ error: 'Runtime Error', detail: stderr.trim(), time: timeTaken, memory: memoryUsedKb });
            } else {
                resolve({ output: stdout.trim(), time: timeTaken, memory: memoryUsedKb });
            }
        });

        run.on('error', (err) => {
            clearTimeout(timeout);
            resolve({ error: 'Execution Failed', detail: err.message });
        });
    });
};

module.exports = { executeNode };
