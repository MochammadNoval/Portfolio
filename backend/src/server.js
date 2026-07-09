const express = require('express');
const cors = require('cors');
const path = require('path');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS with support for frontend local dev server
app.use(cors({
  origin: '*', // Allow any origin for local development simplicity, or specify localhost
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

// Parse JSON request bodies
app.use(express.json());

// API routes
app.use('/api', apiRoutes);

// Simple health check endpoint or home page message
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Portfolio Backend API',
    status: 'running',
    endpoints: {
      getProjects: '/api/projects',
      submitContact: '/api/contact'
    }
  });
});

// Start server if not running on Vercel
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`========================================`);
    console.log(`Backend server is running on port ${PORT}`);
    console.log(`API URL: http://localhost:${PORT}/api`);
    console.log(`========================================`);
  });
}

module.exports = app;
