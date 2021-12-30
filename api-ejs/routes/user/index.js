const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
	console.log(req.query);
	res.status(200).format({
		json: () => res.send({message: 'hello'}),
		text: () => res.send('<h1>Hello</h1>')
	})
});

router.post('/', (req, res) => {
	console.log(req.params, req.body)
  res.status(200).format({
    json: () => res.send({message: 'hello'}),
    text: () => res.send('<h1>Hello</h1>')
  })
})


router.put('/:id', (req, res) => {
  console.log(req.params, req.body)
  res.status(200).format({
    json: () => res.send({message: 'hello'}),
    text: () => res.send('<h1>Hello</h1>')
  })
})


router.delete('/:id', (req, res) => {
	console.log(req.params)
  res.status(200).format({
    json: () => res.send({message: 'hello'}),
    text: () => res.send('<h1>Hello</h1>')
  })
})

module.exports = router;
