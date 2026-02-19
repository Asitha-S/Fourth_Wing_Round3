const express = require('express');
const router = express.Router();
const { getProblems, getProblemById } = require('../services/firestore');

/**
 * GET /api/problems
 * Get all problems with optional filters
 */
router.get('/', async (req, res) => {
    try {
        const { difficulty, search } = req.query;

        const filters = {};
        if (difficulty && difficulty !== 'All') {
            filters.difficulty = difficulty;
        }
        if (search) {
            filters.search = search;
        }

        const problems = await getProblems(filters);

        res.json({
            success: true,
            count: problems.length,
            data: problems
        });
    } catch (error) {
        console.error('Error fetching problems:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch problems'
        });
    }
});

/**
 * GET /api/problems/:id
 * Get a single problem by ID
 */
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const problem = await getProblemById(id);

        if (!problem) {
            return res.status(404).json({
                success: false,
                error: 'Problem not found'
            });
        }

        res.json({
            success: true,
            data: problem
        });
    } catch (error) {
        console.error('Error fetching problem:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch problem'
        });
    }
});

module.exports = router;
