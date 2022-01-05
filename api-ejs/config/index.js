module.exports = (app) => {
	[
		"./cors",
		"./compression",
		"./helmet",
		"./body-parser",
		"./files",
		"./session",
	].forEach((m) => require(m)(app));
};
