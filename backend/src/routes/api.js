const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/projectController');
const ContactController = require('../controllers/contactController');

// Projects endpoint
router.get('/projects', ProjectController.getProjects);

// Contact message endpoint
router.post('/contact', ContactController.sendMessage);

module.exports = router;
