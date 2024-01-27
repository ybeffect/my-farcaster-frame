// pages/api/post.js

export default function handler(req, res) {
    if (req.method === 'POST') {
      const image_url = "https://raw.githubusercontent.com/mbiss10/first-fc-frame/main/assets/rickroll.jpg";
      
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
          </head>
        </html>
      `;
  
      res.setHeader("Content-Type", "text/html");
      res.status(200).send(body);
    } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  