const { Router } = require("express");
const router = Router();

const logger = require("../../utils/logger");

router.get("/", async (req, res) => {
	// logger.log({
	// 	level: "debug",
	// 	message: "ASd",
	// });
	// const profiler = logger.startTimer();

	// setTimeout(function () {
	// 	profiler.done({ level: "info", message: "Logging message" });
	// }, 1000);

	res.status(200).format({
		json: () => res.send({ message: "hello" }),
		text: () => res.send("<h1>Hello</h1>"),
	});
});

router.post("/", (req, res) => {
	console.log(req.params, req.body);
	res.status(200).format({
		json: () => res.send({ message: "hello" }),
		text: () => res.send("<h1>Hello</h1>"),
	});
});

router.put("/:id", (req, res) => {
	console.log(req.params, req.body);
	res.status(200).format({
		json: () => res.send({ message: "hello" }),
		text: () => res.send("<h1>Hello</h1>"),
	});
});

router.delete("/:id", (req, res) => {
	console.log(req.params);
	res.status(200).format({
		json: () => res.send({ message: "hello" }),
		text: () => res.send("<h1>Hello</h1>"),
	});
});

module.exports = router;
