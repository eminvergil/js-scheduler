const schedule = require("node-schedule");

// --- log;
const log4js = require("log4js");
log4js.configure({
  appenders: { log: { type: "file", filename: "schedule.log" } },
  categories: { default: { appenders: ["log"], level: "info" } },
});

const logger = log4js.getLogger("log");

logger.info("scheduler started.");
const job = schedule.scheduleJob("*/1 * * * *", function () {
  logger.warn("every minute you will see this log");
});
