import path from 'path';
import express from 'express';
import multer from 'multer';

const router = express.Router();

const storagte = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/'); // null is for error
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Data.now()}${path.extname(file.originalname)}`);
    }
});

export default router;