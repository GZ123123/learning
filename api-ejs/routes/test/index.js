const { Router } = require('express');
const router = Router();

const upload = require('multer')({ dest: '_tmp/', filename: (req, file, cb) => {
		cb(null, file.filename + '-'+Date.now());
	}
});

router.get('/', (req, res) => {
	res.status(200).json({ success: true  });
});

const cpUpload = upload.fields([{ name: 're.avatar', maxCount: 1 }])
router.post('/', cpUpload, (req, res) => {
	res.status(200).json({ success: true, message: 'success'  });
})

module.exports = router;
