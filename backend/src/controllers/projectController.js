const ProjectModel = require('../models/projectModel');

class ProjectController {
  static async getProjects(req, res) {
    try {
      const projects = await ProjectModel.getAll();
      const lang = req.query.lang || 'id';

      // Map translations dynamically based on requested language
      const localizedProjects = projects.map(project => {
        const title = lang === 'en' && project.title_en ? project.title_en : project.title;
        const description = lang === 'en' && project.description_en ? project.description_en : project.description;
        
        return {
          id: project.id,
          title,
          description,
          thumbnail: project.thumbnail,
          technologies: project.technologies,
          status: project.status,
          demoUrl: project.demoUrl,
          githubUrl: project.githubUrl
        };
      });

      return res.status(200).json({
        success: true,
        data: localizedProjects
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Gagal mengambil data project. Silakan coba lagi nanti.',
        error: error.message
      });
    }
  }
}

module.exports = ProjectController;
