const images = [];
const req = require.context(".", true, /\.(png|jpe?g|svg)$/);

req.keys().forEach((filename) => {
  images.push(req(filename));
});

export default images;
