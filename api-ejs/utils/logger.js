const path = require("path");
const winston = require("winston");
require("winston-daily-rotate-file");

const dirname = path.join(process.cwd(), "/.log/%DATE%");
const { printf } = winston.format;

const transportError = new winston.transports.DailyRotateFile({
	dirname,
	filename: "error.log",
	datePattern: "YYYY-MM-DD",
	zippedArchive: true,
	level: "error",
});
const transportInfo = new winston.transports.DailyRotateFile({
	dirname,
	filename: "info.log",
	datePattern: "YYYY-MM-DD",
	zippedArchive: true,
	level: "info",
});
const transportDebug = new winston.transports.DailyRotateFile({
	dirname,
	filename: "debug.log",
	datePattern: "YYYY-MM-DD",
	zippedArchive: true,
	level: "debug",
});

const _print = printf(({ ...data }) =>
	JSON.stringify({
		time: new Date().toUTCString(),
		...data,
	})
);

const logger = winston.createLogger({
	format: winston.format.combine(winston.format.json(), _print),
	transports: [transportError, transportInfo],
});

if (process.env.NODE_ENV !== "production") {
	logger.add(transportDebug);
}

module.exports = logger;
