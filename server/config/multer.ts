// import multer from 'multer'

// const storage = multer.diskStorage({})

// const upload = multer({})

// export default upload;

import multer from 'multer';
import fs from 'fs';
import path from 'path';

// Make sure uploads folder exists
fs.mkdirSync('uploads', { recursive: true });

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    }
});

const upload = multer({ storage });

export default upload;