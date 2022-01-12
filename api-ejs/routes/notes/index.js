const { Router } = require("express");
const { validationResult } = require('express-validator');
const { createNotes } = require("../../middleware/notes.middleware");
const router = Router();

router.get("/", async (req, res) => {
	const _res = await require("./get-all")(req.query).catch(res.status(404));
	return res.status(200).format({
		json: () => res.json(_res),
	});
});

router.get("/:id", async (req, res) => {
	const _res = await require("./get-by-id")(req.params["id"]).catch(
		res.status(404)
	);

	return res.status(_res.success ? 200 : 204).format({
		json: () => res.send(_res),
	});
});

router.post("/", createNotes,async (req, res) => {
	const _res = await require("./create")(req.body).catch(res.status(404));

	return res.status(_res.success ? 201 : 400).format({
		json: () => res.send(_res),
	});
});

router.put("/:id", async (req, res) => {
	const _res = await require("./update")(req.params["id"], req.body);

	if (_res.data == null)
		return res.status(404).format({
			json: () => res.send({ status: false }),
		});

	return res.status(_res.success ? 202 : 400).format({
		json: () => res.send(_res),
	});
});

router.delete("/:id", async (req, res) => {
	const _res = await require("./delete")(req.params["id"]).catch(
		res.status(404)
	);

	return res.status(200).format({
		json: () => res.send(_res),
	});
});

module.exports = router;
