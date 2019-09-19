/**
 *  See ./readme.md for usage
 **/
const quench = require("./quench/quench.js");

const projectRoot = quench.resolvePath(__dirname, "..");

const createBuildTask = require("./tasks/build.js");

/**
 * gulp build
 *
 * to build for prduction/jenkins:
 *    gulp build --no-watch --env production
 */
const build = createBuildTask(projectRoot);
build.displayName = "build";
exports.build = build;

exports.default = quench.logHelp;
