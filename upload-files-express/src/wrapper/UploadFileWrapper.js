const uploadFile = (file, path) => {
    return new Promise((resolve, reject) => {
        file.mv(path, (err) => {
            if(err) reject(err);

            resolve(`File created ${path}`);
        });
    });
}

module.exports = {
    uploadFile
};