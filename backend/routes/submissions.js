const express = require('express');
const router = express.Router();
console.log('Loading submissions route...');
const { body, validationResult } = require('express-validator');
const { executeCode } = require('../services/localCompiler');
const { getLogs } = require('../services/logger');
const {
    getProblemById,
    createSubmission,
    getSubmissionHistory,
    updateUserProgress,
    startContest,
    updateTeamLanguages,
    deductPoints
} = require('../services/firestore');

/**
 * POST /api/submissions/run
 * Run code against sample test cases (doesn't save)
 */
router.post('/run', [
    body('problemId').notEmpty().withMessage('Problem ID is required'),
    body('code').notEmpty().withMessage('Code is required'),
    body('language').notEmpty().withMessage('Language is required')
], async (req, res) => {
    console.log('Hit /run endpoint');
    try {
        // Validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const { problemId, code, language } = req.body;

        // Get problem details
        const problem = await getProblemById(problemId);
        if (!problem) {
            return res.status(404).json({
                success: false,
                error: 'Problem not found'
            });
        }

        // Use only first 2-3 test cases for "Run"
        const sampleTestCases = problem.testCases ? problem.testCases.slice(0, 2) : [];

        if (sampleTestCases.length === 0) {
            return res.status(400).json({
                success: false,
                error: 'No test cases available for this problem'
            });
        }

        // Execute code
        const result = await executeCode(code, language, sampleTestCases);

        res.json({
            success: true,
            data: result
        });
    } catch (error) {
        console.error('Error running code:', error);
        res.status(500).json({
            success: false,
            error: error.message || 'Failed to run code'
        });
    }
});

/**
 * POST /api/submissions/submit
 * Submit code for all test cases (saves submission)
 */
router.post('/submit', [
    body('problemId').notEmpty().withMessage('Problem ID is required'),
    body('code').notEmpty().withMessage('Code is required'),
    body('language').notEmpty().withMessage('Language is required'),
    body('userId').notEmpty().withMessage('User ID is required')
], async (req, res) => {
    try {
        // Validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const { problemId, code, language, userId } = req.body;

        // Get problem details
        const problem = await getProblemById(problemId);
        if (!problem) {
            return res.status(404).json({
                success: false,
                error: 'Problem not found'
            });
        }

        // Use all test cases for "Submit"
        const testCases = problem.testCases || [];

        if (testCases.length === 0) {
            return res.status(400).json({
                success: false,
                error: 'No test cases available for this problem'
            });
        }

        // Execute code
        const result = await executeCode(code, language, testCases);

        // Save submission
        const submission = await createSubmission(userId, problemId, code, language, result);

        // Update user progress if accepted
        if (result.status === 'Accepted') {
            await updateUserProgress(userId, problemId, 'Accepted');
        }

        res.json({
            success: true,
            data: {
                ...result,
                submissionId: submission.id
            }
        });
    } catch (error) {
        console.error('Error submitting code:', error);
        res.status(500).json({
            success: false,
            error: error.message || 'Failed to submit code'
        });
    }
});

/**
 * GET /api/submissions/history/:userId/:problemId
 * Get submission history for a user and problem
 */
router.get('/history/:userId/:problemId', async (req, res) => {
    try {
        const { userId, problemId } = req.params;

        const submissions = await getSubmissionHistory(userId, problemId);

        res.json({
            success: true,
            count: submissions.length,
            data: submissions
        });
    } catch (error) {
        console.error('Error fetching submission history:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch submission history'
        });
    }
});

/**
 * POST /api/submissions/start
 * Start contest for a team
 */
router.post('/start', [
    body('teamName').notEmpty().withMessage('Team Name is required')
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }
        const { teamName } = req.body;
        const teamRequest = await startContest(teamName);
        res.json({ success: true, data: teamRequest });
    } catch (error) {
        console.error('Error starting contest:', error);
        res.status(500).json({ success: false, error: 'Failed to start contest' });
    }
});

/**
 * POST /api/submissions/languages
 * Update team languages
 */
router.post('/languages', [
    body('teamName').notEmpty().withMessage('Team Name is required'),
    body('languages').isArray().withMessage('Languages must be an array'),
    body('issueIds').optional().isArray().withMessage('Issue IDs must be an array')
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }
        const { teamName, languages, issueIds } = req.body;
        await updateTeamLanguages(teamName, languages, issueIds);
        res.json({ success: true });
    } catch (error) {
        console.error('Error updating languages:', error);
        res.status(500).json({ success: false, error: 'Failed to update languages' });
    }
});

/**
 * POST /api/submissions/penalty
 * Deduct points from a team
 */
router.post('/penalty', [
    body('teamName').notEmpty().withMessage('Team Name is required'),
    body('points').isInt({ min: 1 }).withMessage('Points must be a positive integer'),
    body('reason').notEmpty().withMessage('Reason is required')
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }
        const { teamName, points, reason } = req.body;

        // Debug logging
        try {
            const fs = require('fs');
            fs.appendFileSync('penalty_debug.log', `[${new Date().toISOString()}] Request: ${JSON.stringify(req.body)}\n`);
        } catch (e) { }

        await deductPoints(teamName, points, reason);

        // Log the penalty
        const { logSubmission } = require('../services/logger');
        logSubmission(teamName, "PENALTY", reason, -points, "N/A");

        res.json({ success: true });
    } catch (error) {
        console.error('Error processing penalty:', error);
        try {
            const fs = require('fs');
            fs.appendFileSync('penalty_debug.log', `[${new Date().toISOString()}] Error: ${error.message}\n${error.stack}\n`);
        } catch (e) { }
        res.status(500).json({ success: false, error: 'Failed to process penalty' });
    }
});

/**
 * GET /api/submissions/logs
 * Get submission logs
 */
router.get('/logs', async (req, res) => {
    try {
        const logs = getLogs();
        res.json({ success: true, data: logs });
    } catch (error) {
        console.error('Error fetching logs:', error);
        res.status(500).json({ success: false, error: 'Failed to fetch logs' });
    }
});

module.exports = router;
