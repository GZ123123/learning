const fs = require('fs');
const multer = require('multer');

const path = require('path');

const dest = (filename = '') => path.join(process.cwd(), ".tmp", filename);
const to = (filename = '') => path.join(process.cwd(), "uploads", filename);

const _thumb = (file) => `_tmp-${Date.now()}`;

const storage = multer.diskStorage({
	destination: dest(),
	filename: (req, file, cb) => cb(null, _thumb(file))
})

module.exports = {
	uploader: multer({ storage }),
	saver: (file) => fs.rename(dest(file.filename), to(file.originalname), (err) => {
		if (err) throw err;
		console.log("upload success")
	})
}