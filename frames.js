// pages/api/frames.js

export default function handler(req, res) {
    if (req.method === 'GET') {
      const image_url = "https://raw.githubusercontent.com/mbiss10/first-fc-frame/main/assets/output.jpeg";
  
      const body = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width"/>
            <meta property="og:title" content="Frame" />
            <meta property='og:image' content="${image_url}" />
            <meta property="fc:frame" content="vNext" />
            <meta property="fc:frame:image" content="${image_url}" />
            <meta property="fc:frame:button:1" content="Play!" />
            <meta property="fc:frame:post_url" content="https://first-fc-frame.vercel.app/api/post" />
          </head>
        </html>
      `;
  
      res.setHeader("Content-Type", "text/html");
      res.status(200).send(body);
    } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  