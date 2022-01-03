const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
	const data = await require('./get-all')(req.query);

	return res.status(200).format({
		json: () => res.json({ status: true, data })
	});
});

router.get('/:id', async (req, res) => {
	const data = await require('./get-by-id')(req.params['id']);

	if(!data)
		return res.status(204).format({
			json: () => res.send({ status: false, data: null })
		});

	return res.status(200).format({
		json: () => res.send({ status: true, data  })
	});
});

router.post('/', async (req, res) => {
	const _data = req.body;

	console.log(req.body);

	return res.status(201).format({
		json: () => res.send({ status: true, data: _data })
	});
});

router.put('/:id', async (req, res) => {
	const _id = req.params['id'];
	const _data = req.body;

	return res.status(200).format({
		json: () => res.send({ status: true, data: { _id, ..._data } })
	});
});

router.delete('/:id', async (req, res) => {
	const _id = req.params['id'];

	return res.status(200).format({
		json: () => res.send({ status: true, data: _id  })
	});
});

module.exports = router;
