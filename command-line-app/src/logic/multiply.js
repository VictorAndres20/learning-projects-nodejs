const fs = require('fs');

module.exports.executeMultiply = (a , b) => {
    return a * b;
}

module.exports.createFile = async (base, limit) => {
    if(!Number(base) || !Number(limit))
        throw new Error("Base o límite no es numérico");

    let content = buildContent(base, limit);

    let response = await writeFile(`${__dirname}/../../files/tabla-${base}.txt`, content);
    console.log(response);
}

const buildContent = (base, limit) => {
    let content = "";

    for(let i = 0; i <= limit; i++){
        content += `${base} x ${i} = ${base*i}\n`;
    }

    return content;
} 

const writeFile = (pathFile,data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(pathFile, data, (err) => {
            if(err)
                reject(err);
            else
                resolve(`Archivo creado ${pathFile}`);
        });
    });   
}