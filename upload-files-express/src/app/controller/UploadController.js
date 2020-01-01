const UploadService = require('../../services/UploadService');

const uploadImage = (req, res) => {
    /** File sended is in req.files object */
    let files = req.files;
    UploadService.uploadImage(files.file)
    .then((result) => {
        res.status(201).json({
            ok: true,
            msg: 'Created',
            data: result
        });
    })
    .catch((err) => {
        res.status(err.codeHttp || 500).json({
            ok:false,
            msg: err.message
        });
    });
}


module.exports = {
    uploadImage
}