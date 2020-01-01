const RenderService = require('../../services/RenderService');
const Path = require('path');

const renderImage = (req, res) => {
    let image = req.params.image;
    console.log(image); //name of image
    RenderService.pathImage(image)
    .then((path) => {
        res.status(200)
        .sendFile(path);
    })
    .catch((err) => {
        let notFoundImage = Path.join(__dirname,'../../../public/assets','not-found.png'); 
        console.log(err.message);
        console.log(notFoundImage);
        res.status(404)
        .sendFile(notFoundImage);
    });
}

module.exports = {
    renderImage
}