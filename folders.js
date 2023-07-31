const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const pool = require('../db');

// Create Folder
router.post('/', verifyToken, async (req, res) => {
  try {
    const { name } = req.body;
    const userId = req.userId;

    // Create folder and store metadata in the database
    // ...

    res.status(201).json({ message: 'Folder created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Create Subfolder
router.post('/:parentId', verifyToken, async (req, res) => {
  try {
    const { name } = req.body;
    const parentId = req.params.parentId;
    const userId = req.userId;

    // Create subfolder and store metadata in the database
    // ...

    res.status(201).json({ message: 'Subfolder created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
