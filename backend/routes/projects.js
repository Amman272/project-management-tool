// routes/projects.js
const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const authMiddleware = require('../middleware/authMiddleware');

// GET /api/projects - Get all projects (protected)
router.get('/', authMiddleware, async (req, res) => {
  try {
    // If you only want user-specific projects:
    // const projects = await Project.find({ owner: req.user.userId });
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST /api/projects - Create a new project (protected)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { name, description } = req.body;
    const newProject = new Project({
      name,
      description,
      owner: req.user.userId  // If you want to associate it with the user
    });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET /api/projects/:id - Get a single project
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT /api/projects/:id - Update a project
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { name, description } = req.body;
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true }
    );
    if (!updatedProject) return res.status(404).json({ message: 'Project not found' });
    res.json(updatedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /api/projects/:id - Delete a project
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Project deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
