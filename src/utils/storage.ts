import { Request } from "express";
import multer, { StorageEngine, FileFilterCallback } from "multer";

const storage: StorageEngine = multer.diskStorage({
    destination: (Req: Request, File, cb) => {
        cb(null, "src/uploads/");
    },
    filename: (Req: Request, File, cb) => {
        cb(null, `${Date.now()} - ${File.originalname}`);
    }
});

const upload = multer({ storage });

export default upload;