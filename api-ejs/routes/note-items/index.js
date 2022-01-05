const { Router } = require('express');
const sharp = require('sharp');
const fs = require('fs');
const { uploader } = require('../../utils/uploader');

const router = Router();

router.get('/:id', (req, res) => {

	return res.status(200).format({
		json: () => res.send({ success: true })
	});
})

router.post('/:note_id', uploader.array('photos', 5), async (req, res) => {
	const _note_id = req.params['note_id'];
  const _body = req.body;
	const _files = req.files.map(f => f);

	console.log("note id: ", _note_id);
	console.log("body: ", _body);
	console.log("files: ", _files);

	_files.forEach(f => 
		sharp(f.path)
		//.resize(200, 300)
		.toFile(process.cwd()+'/uploads/_tmp.webp', 
				function (err, info) {
					if(err) console.log(err);
					else console.log("sharp", info)
		})
	)

	return res.status(200).format({
		json: () => res.send({ success: true })
	});
})

router.put('/:id', uploader.array('photos', 5), (req, res) => {
	const _id = req.params['id'];
  const _body = req.body;
	const files = req.files;
	return res.status(200).format({
		json: () => res.send({ success: true })
	});
})

router.delete('/:id', (req, res) => {
	const _id = req.params['id'];

	return res.status(200).format({
		json: () => res.send({ success: true })
	});
})

module.exports = router;
