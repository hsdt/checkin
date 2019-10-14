import multer from 'multer';
import mkdirp from 'mkdirp';

/**
 * Khởi tạo disk storage cho việc lưu trữ file
 * - Lưu trữ upload file theo user hoặc group
 */
const storage = multer.diskStorage({
  destination(req, file, cb) {
    const now = new Date();
    const userDir = '/public/uploads/' + req.param('user', `${now.getFullYear()}/${now.getMonth()}/${now.getDate()}`);
    const uploadDir = req.kites.appDirectory + userDir;
    (req as any).uploadDir = userDir;
    mkdirp(uploadDir, err => {
      cb(null, uploadDir);
    });
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

/**
 * config upload storage
 */
const upload = multer({ storage });

export {
  upload,
};
