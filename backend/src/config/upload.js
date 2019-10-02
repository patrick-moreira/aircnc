const multer = require('multer'); // multer: Lida com upload de arquivos
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..','..','uploads'), // usa-se o resolve pois no windows a barra e invertida ('\') e no linux nao ('/')
        filename: (req, file, callback) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            callback(null, `${name}-${Date.now()}${ext}`);
        },
    }),
};