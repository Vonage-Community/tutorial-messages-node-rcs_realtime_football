// messagingService.js
const { Vonage } = require('@vonage/server-sdk');
const config = require('../../config/config');
const messageTemplates = require('../templates/messageTemplates');

// Initialize the Vonage client with our application credentials
const vonage = new Vonage({
  applicationId: config.vonage.applicationId,
  privateKey: require('fs').readFileSync(config.vonage.privateKey)
});

module.exports = {

  sendInitialMessage: async (to) => {
    try {
      const msg = messageTemplates.initialMessage(to);
      const response = await vonage.messages.send(msg);
      console.log(`Initial message sent successfully`);
      return response;
    } catch (error) {
      console.error('Error sending initial message:', error);
      throw error;
    }
  },

  sendManOfTheMatchMessage: async (to) => {
    try {
      const msg = messageTemplates.manOfTheMatchMessage(to);
      const response = await vonage.messages.send(msg);
      console.log(`Man of the Match message sent successfully`);
      return response;
    } catch (error) {
      console.error('Error sending Man of the Match message:', error);
      throw error;
    }
  },

  sendPlayerMerchCarousel: async (to) => {
    try {
      const msg = messageTemplates.playerMerchCarousel(to);
      const response = await vonage.messages.send(msg);
      console.log(`Merchandise carousel sent successfully`);
      return response;
    } catch (error) {
      console.error('Error sending merchandise carousel:', error);
      throw error;
    }
  }

}
