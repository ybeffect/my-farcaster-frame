// /api/button-click.js
module.exports = (req, res) => {
    const { buttonId } = req.body;
    
    // Logic to determine what to send based on buttonId
    let imageUrl, message;
    if (buttonId === '1') {
      imageUrl = 'https://example.com/image1.jpg';
      message = 'Button 1 clicked!';
    } else if (buttonId === '2') {
      imageUrl = 'https://example.com/image2.jpg';
      message = 'Button 2 clicked!';
    }
    // Add more conditions for other buttons if necessary
  
    // Send back the updated frame state
    res.json({ imageUrl, message });
  };
  