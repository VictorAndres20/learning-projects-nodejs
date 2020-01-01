const UploadFileWrapper = require('../wrapper/UploadFileWrapper');

const uploadImage = async (file) => {
    let name = "image";
    let extension = "png";
    let path = `${__dirname}/../../uploads/${name}.${extension}`;
    return await UploadFileWrapper.uploadFile(file, path);
}

module.exports = {
    uploadImage
}