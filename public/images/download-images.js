const fs = require('fs');
const https = require('https');

const images = [
  {
    name: 'scones.jpg',
    url: "https://static01.nyt.com/images/2024/09/25/multimedia/25KOrex-sconesrex-fbmj/18KOrex-sconesrex-fbmj-jumbo.jpg"
  },
  {
    name: 'croissants.jpg',
    url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a'
  },
  {
    name: 'muffins.jpg',
    url: 'https://images.unsplash.com/photo-1558401391-7899b4bd5bbf'
  },
  {
    name: 'cannoli.jpg',
    url: 'https://images.unsplash.com/photo-1607958996333-41785c42e42e'
  },
  {
    name: 'eclair.jpg',
    url: 'https://images.unsplash.com/photo-1612809075925-230725151da2'
  },
  {
    name: 'tarts.jpg',
    url: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13'
  },
  {
    name: 'mini-pies.jpg',
    url: 'https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5'
  }
];

if (!fs.existsSync('./images')) {
  fs.mkdirSync('./images');
}

images.forEach(image => {
  https.get(`${image.url}?w=800&q=80`, (response) => {
    const fileStream = fs.createWriteStream(`./images/${image.name}`);
    response.pipe(fileStream);
    fileStream.on('finish', () => {
      console.log(`Downloaded: ${image.name}`);
    });
  });
});