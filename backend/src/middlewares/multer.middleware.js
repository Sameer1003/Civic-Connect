import multer from "multer";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, path.resolve(__dirname, "../../public/temp"))
    },
    filename: function (req, file, cb){
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})

const upload = multer({ storage: storage });

export { upload };