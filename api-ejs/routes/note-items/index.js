const { Router } = require('express');
const sharp = require('sharp');
const fs = require('fs');
const { uploader } = require('../../utils/uploader');

const router = Router();

router.get('/:id', async (req, res) => {
	const _id = req.params['id'];

	const data = await require('./get-by-id')(_id);

	if(!data)
		return res.status(404).format({
			json: () => res.send({ success: false })
		});

	return res.status(200).format({
		json: () => res.send({ success: true })
	});
})

router.post('/:note_id', uploader.array('photos', 5), async (req, res) => {
	const _note_id = req.params['note_id'];
  const _body = req.body;
	const _files = req.files.map(f => f);

	const data = await require('./create')(_note_id, _body, _files);

	if(!data)
		return res.status(400).format({
			json: () => res.send({ success: false })
		});

	return res.status(200).format({
		json: () => res.send({ success: true })
	});
})

router.put('/:id', uploader.array('photos', 5), async (req, res) => {
	const _id = req.params['id'];
  const _body = req.body;
	const _files = req.files;

	const data = await require('./update')(_id, _body, _files);

	if(!data)
		return res.status(400).format({
			json: () => res.send({ success: false })
		});

	return res.status(200).format({
		json: () => res.send({ success: true })
	});
})

router.delete('/:id', async (req, res) => {
	const _id = req.params['id'];

	const _res = await require('./delete')(_id);

	if(!_res)
		res.status(404).format({
			json: () => res.send({ success: false  })
		});

	return res.status(200).format({
		json: () => res.send({ success: true })
	});
})

module.exports = router;
