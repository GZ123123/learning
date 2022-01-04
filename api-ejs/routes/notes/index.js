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
	const _data = await require('./create')(req.body);
	
	if(!_data)
		return res.status(400).format({
			json: () => res.send({ status: false })
		})
	return res.status(201).format({
		json: () => res.send({ status: true, data: _data })
	});
});

router.put('/:id', async (req, res) => {
	const _res = await require('./update')(req.params['id'], req.body);

	return res.status(200).format({
		json: () => res.send({ status: true, data: { _res } })
	});
});

router.delete('/:id', async (req, res) => {
	const _res = await require('./delete')(req.params['id']);

	return res.status(200).format({
		json: () => res.send({ status: true, data: _id  })
	});
});

module.exports = router;
