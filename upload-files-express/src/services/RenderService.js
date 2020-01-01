const fs = require('fs');
const path = require('path');

const pathImage = async (image) => {
    let absolutePathImage = path.join(__dirname,'../../uploads',image);
    absolutePathImage = validatePath(absolutePathImage);
    return absolutePathImage;
}

const validatePath = (absolutePathImage) => {
    console.log(fs.existsSync(absolutePathImage));
    if(! fs.existsSync(absolutePathImage))
        throw new Error(`${absolutePathImage} doesn't exist`);
    
    return absolutePathImage;
}

module.exports = {
    pathImage
}