const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../../data/messages.json');

class ContactModel {
  static async saveMessage(messageData) {
    try {
      // Read current messages
      let messages = [];
      try {
        const data = await fs.readFile(filePath, 'utf8');
        messages = JSON.parse(data);
      } catch (readErr) {
        // If file doesn't exist or is invalid, start with empty array
        messages = [];
      }

      // Construct new message object
      const newMessage = {
        id: messages.length + 1,
        name: messageData.name,
        email: messageData.email,
        message: messageData.message,
        timestamp: new Date().toISOString()
      };

      messages.push(newMessage);

      // Write back to file
      await fs.writeFile(filePath, JSON.stringify(messages, null, 2), 'utf8');
      return newMessage;
    } catch (error) {
      console.error('Error saving contact message:', error);
      throw error;
    }
  }

  static async getAllMessages() {
    try {
      const data = await fs.readFile(filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }
}

module.exports = ContactModel;
