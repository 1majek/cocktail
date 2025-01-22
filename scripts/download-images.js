const https = require('https');
const fs = require('fs');
const path = require('path');

const cocktailImages = [
  {
    name: 'tropical-paradise.jpg',
    url: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80'
  },
  {
    name: 'island-sunset.jpg',
    url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80'
  },
  {
    name: 'blue-lagoon.jpg',
    url: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=800&q=80'
  },
  {
    name: 'mango-tango.jpg',
    url: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80'
  }
];

const downloadImage = (url, filename) => {
  const filepath = path.join(__dirname, '../public/cocktails', filename);
  const file = fs.createWriteStream(filepath);

  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(filepath, () => {
      console.error(`Error downloading ${filename}:`, err.message);
    });
  });
};

// Create the cocktails directory if it doesn't exist
const dir = path.join(__dirname, '../public/cocktails');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Download all images
cocktailImages.forEach(image => {
  downloadImage(image.url, image.name);
}); 