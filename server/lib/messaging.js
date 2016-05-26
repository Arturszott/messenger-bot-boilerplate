import request from 'request';

import config from '../../config.js'

export function sendTextMessage(recipient, text) {
  const messageData = {
    text: text
  };

  request.post({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: config.accessToken },
    json: {
      recipient: { id: recipient },
      message: messageData
    }
  }, function(error, response, body) {
    if (error) {
      console.log('Error sending message: ', error);
    } else if (response.body.error) {
      console.log('Error: ', response.body.error);
    }
  });
}
