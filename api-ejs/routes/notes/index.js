const { Router } = require("express");

const router = Router();

router.get("/", async (req, res) => {
	const data = await require("./get-all")(req.query).catch(res.status(404));
	return res.status(200).format({
		json: () => res.json({ status: true, data }),
	});
});

router.get("/:id", async (req, res) => {
	const data = await require("./get-by-id")(req.params["id"]).catch(
		res.status(404)
	);

	if (!data)
		return res.status(204).format({
			json: () => res.send({ status: false, data: null }),
		});

	return res.status(200).format({
		json: () => res.send({ status: true, data }),
	});
});

router.post("/", async (req, res) => {
	const _data = await require("./create")(req.body).catch(res.status(404));

	if (!_data)
		return res.status(400).format({
			json: () => res.send({ status: false }),
		});
	return res.status(201).format({
		json: () => res.send({ status: true, data: _data }),
	});
});

router.put("/:id", async (req, res) => {
	const _res = await require("./update")(req.params["id"], req.body);

	if (_res == null)
		return res.status(404).format({
			json: () => res.send({ status: false }),
		});

	if (_res === false)
		return res.status(400).format({
			json: () => res.send({ status: false }),
		});

	return res.status(202).format({
		json: () => res.send({ status: true, data: { id: req.params["id"] } }),
	});
});

router.delete("/:id", async (req, res) => {
	const _res = await require("./delete")(req.params["id"]).catch(
		res.status(404)
	);

	return res.status(200).format({
		json: () => res.send({ status: true, data: _res }),
	});
});

module.exports = router;
