const express = require('express');
const bodyParser = require('body-parser');
const { verifySignature } = require('@vonage/jwt');
const config = require('./config');
const messagingService = require('./messagingService');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = config.port;
const VONAGE_API_SIGNATURE_SECRET = config.vonage.signatureSecret;

app.get('/', (req, res) => {
  res.send('RCS Interactive Football Demo - Server is running!');
});

app.post('/send-initial-message', async (req, res) => {
    const toNumber = req.body.to;
    
    try {
      await messagingService.sendInitialMessage(toNumber);
      res.status(200).json({ message: 'Initial message sent successfully.' });
    } catch (error) {
      console.error('Error in /send-initial-message:', error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  });

  app.post('/inbound', async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token || !verifySignature(token, VONAGE_API_SIGNATURE_SECRET)) {
      console.error('Invalid signature');
      return res.status(401).json({ error: 'Invalid signature' });
    }
  
    const inboundMessage = req.body;
    
    if (inboundMessage.channel === 'rcs' && inboundMessage.message_type === 'reply') {
      const userSelection = inboundMessage.reply?.postbackData || inboundMessage.reply?.id;
      const userNumber = inboundMessage.from;
      
      try {
        switch (userSelection) {
          case 'brazil':
            await messagingService.sendManOfTheMatchMessage(userNumber);
            break;
            
          case 'ronaldinho':
            await messagingService.sendPlayerMerchCarousel(userNumber);
            break;
          
            default:
              // For any other selection, log a confirmation message to the service
              console.log(`Sending confirmation for ${userSelection} to ${userNumber}`);
          }
        
        res.status(200).end();
      } catch (error) {
        console.error('Error processing inbound message:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    } else {
      // Not an RCS reply message
      console.log('Received non-RCS reply message');
      res.status(200).end();
    }
  });
  
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});