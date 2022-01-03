const { Router } = require('express');
const router = Router();

const connection = require('../../config/connect');

router.get('/', async (req, res) => {
  const _res = await connection((data, db) => new Promise((res, rej) => {
    db.all(`Select * from user`, (err, rows) => {
      if (err) return rej(err);
      res(rows);
    })
  }));
  console.log("res", _res)

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
