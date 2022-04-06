const http = require('http');
const express = require('express');
const { urlencoded } = require('body-parser');

// Set up our express web application
const PORT = 8769;
const app = express();
app.use(urlencoded({ extended: false }));

// Create a route to handle incoming SMS messages
// This is where the magic happens!
app.post('/sms', (request, response) => {
  console.log(
    `Incoming message from ${request.body.From}: ${request.body.Body}`
  );
  response.type('text/xml');
  response.send(`
    <?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Message><Body>TwilioQuest rules</Body></Message>
</Response>
    
  `);
});

// Use a tunneling tool like ngrok to expose your server to the public Internet!
// Create and run an HTTP server which can handle incoming requests
const server = http.createServer(app);
server.listen(PORT, () =>
  console.log(`Express server listening on localhost:${PORT}`)
);
