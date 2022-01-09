const { Router } = require("express");
const { uploader } = require("../../utils/uploader");

const router = Router();

router.get("/:id", async (req, res) => {
	const _id = req.params["id"];

	const _res = await require("./get-by-id")(_id);

	return res.status(_res.success ? 200 : 404).format({
		json: () => res.send(_res),
	});
});

router.post("/:note_id", uploader.array("photos", 5), async (req, res) => {
	const _note_id = req.params["note_id"];
	const _body = req.body;
	const _files = req.files ?? [];

	const _res = await require("./create")(_note_id, _body, _files);

	return res.status(_res.success ? 200 : 400).format({
		json: () => res.send(_res),
	});
});

router.put("/:id", uploader.array("photos", 5), async (req, res) => {
	const _id = req.params["id"];
	const _body = req.body;
	const _files = req.files ?? [];

	const _res = await require("./update")(_id, _body, _files);

	return res.status(_res.success ? 202 : 400).format({
		json: () => res.send(_res),
	});
});

router.delete("/:id", async (req, res) => {
	const _id = req.params["id"];

	const _res = await require("./delete")(_id);

	return res.status(_res.success ? 200 : 404).format({
		json: () => res.send(_res),
	});
});

module.exports = router;
