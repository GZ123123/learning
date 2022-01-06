const fs = require('fs');
const multer = require('multer');
const sharp = require('sharp');
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
	saver: async (file) => { 
		console.log("File: ", file);
		const _res = await sharp(dest(file.filename))
			.toFile(to(file.originalname))
		fs.unlink(dest(file.filename), (err) => console.log(err))
		return to(file.originalname);
	}
}
