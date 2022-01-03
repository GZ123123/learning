const { Router } = require('express');

const router = Router();

router.get('/:id', (req, res) => {

	return res.status(200).format({
		json: () => res.send({ success: true })
	});
})

router.post('/:note_id', (req, res) => {
	const _note_id = req.params['note_id'];

	return res.status(200).format({
		json: () => res.send({ success: true })
	});
})

router.put('/:id', (req, res) => {
	const _id = req.params['id'];

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
