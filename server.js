const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use the port Vercel provides, or fallback to 3000 for local development
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define an object to hold your frame state
let frameState = {
  imageUrl: 'https://pbs.twimg.com/profile_images/1536483903774531586/KHNPU1AN_400x400.jpg',
  message: 'This is a simple interactive frame example.'
};

// Serve the initial HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/frame.html');
});

// Handle button clicks
app.post('/button-click', (req, res) => {
  const buttonId = req.body.buttonId;
  console.log(`Button ${buttonId} was clicked!`);

  // Based on the button clicked, change the frame state
  if (buttonId == '1') {
    frameState.imageUrl = 'https://pbs.twimg.com/profile_images/1518670972559130624/-G9gNsOp_400x400.png';
    frameState.message = 'Button 1 clicked!';
  } else if (buttonId == '2') {
    frameState.imageUrl = 'https://pbs.twimg.com/profile_images/1524830278505549824/jCHsbzAY_400x400.jpg';
    frameState.message = 'Button 2 clicked!';
  }
  // ... handle other buttons similarly

  // Send a response with the new frame state
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta property="og:type" content="website" />
        <meta property="og:title" content="My Farcaster Frame" />
        <meta property="og:image" content="${frameState.imageUrl}" />
        <meta property="og:description" content="${frameState.message}" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${frameState.imageUrl}" />
        <meta property="fc:frame:button:1" content="Button1" />
        <meta property="fc:frame:button:2" content="Button2" />
        <meta property="fc:frame:button:3" content="Button3" />
        <meta property="fc:frame:button:4" content="Button4" />
        <title>My Farcaster Frame</title>
    </head>
    <body>
        <h1>Welcome to My Farcaster Frame</h1>
        <p>${frameState.message}</p>
        <img src="${frameState.imageUrl}" alt="Farcaster Frame Image">
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});