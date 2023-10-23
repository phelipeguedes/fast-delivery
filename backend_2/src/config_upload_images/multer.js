const multer = require('multer');
const util = require('util');

const storage = multer.diskStorage({

    // path de destino das imagens
    destination: (req, file, cb) => {
        cb(null, '../resources/assets/uploads');
    },

    // nome original da imagem
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const uploadImage = multer({storage: storage}).single('image_path');
const uploadImageMiddleware = util.promisify(uploadImage);

module.exports = uploadImageMiddleware;
