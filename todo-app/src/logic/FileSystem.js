/**
 * File Systems handler
 */
const fs = require('fs');

const PATH = `${__dirname}/../../files/tasks.json`;

const buildJSONData = (data) => {
    return JSON.stringify(data);
}

const buildJSONObject = (data) => {
    return JSON.parse(data);
}

const writeFile = (pathFile ,data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(pathFile, data, (err) => {
            if(err)
                reject(err);
            else
                resolve(`Archivo creado ${pathFile}`);
        });
    }); 
}

const readFile = (pathFile) => {
    return new Promise((resolve, reject) => {
        fs.readFile(pathFile,{encoding: 'UTF-8'}, (err, data) => {
            if (err) 
                reject(err);
            else 
                resolve(data);
        });
    });
}

const readJSONFile = (pathFile) => {
    try{
        return require(pathFile);
    } catch (error){
        return []
    }
}

module.exports = {
    writeFile,
    readFile,
    readJSONFile,
    PATH,
    buildJSONData,
    buildJSONObject
}