const del = require("del");
const path = require("../paths.js");


module.exports = function clean() {
  return del(path.clean);
}