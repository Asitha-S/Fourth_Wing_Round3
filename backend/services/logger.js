const fs = require('fs');
const path = require('path');

const LOG_FILE = path.join(__dirname, '../../submissions.log');

/**
 * Log a submission or event
 * Format: [ISO_TIMESTAMP] [TEAM_NAME] [PROBLEM_ID] [STATUS] [POINTS] [TIME_REMAINING]
 */
function logSubmission(teamName, problemId, status, points, timeRemaining) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${teamName}] [${problemId}] [${status}] [${points}] [${timeRemaining}]\n`;

    fs.appendFile(LOG_FILE, logEntry, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
}

/**
 * Read the log file
 */
function getLogs() {
    try {
        if (fs.existsSync(LOG_FILE)) {
            return fs.readFileSync(LOG_FILE, 'utf8');
        }
        return '';
    } catch (err) {
        console.error('Error reading log file:', err);
        return '';
    }
}

module.exports = {
    logSubmission,
    getLogs
};
