const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../../data/projects.json');

class ProjectModel {
  static async getAll() {
    try {
      const data = await fs.readFile(filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error reading projects data:', error);
      return [];
    }
  }
}

module.exports = ProjectModel;
