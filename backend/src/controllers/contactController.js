const ContactModel = require('../models/contactModel');

class ContactController {
  static async sendMessage(req, res) {
    try {
      const { name, email, message } = req.body;

      // Validation
      if (!name || !name.trim()) {
        return res.status(400).json({
          success: false,
          message: 'Nama wajib diisi.'
        });
      }
      if (!email || !email.trim()) {
        return res.status(400).json({
          success: false,
          message: 'Email wajib diisi.'
        });
      }
      // Simple email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return res.status(400).json({
          success: false,
          message: 'Format email tidak valid.'
        });
      }
      if (!message || !message.trim()) {
        return res.status(400).json({
          success: false,
          message: 'Pesan wajib diisi.'
        });
      }

      const savedMessage = await ContactModel.saveMessage({
        name: name.trim(),
        email: email.trim(),
        message: message.trim()
      });

      return res.status(201).json({
        success: true,
        message: 'Pesan Anda berhasil dikirim! Terima kasih.',
        data: savedMessage
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Gagal mengirim pesan. Silakan coba lagi nanti.',
        error: error.message
      });
    }
  }
}

module.exports = ContactController;
