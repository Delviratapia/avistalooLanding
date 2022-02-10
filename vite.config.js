const path = require("path");
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" ? "/" + path.basename(process.cwd()) + "/" : "/";

module.exports = {
  root: "src",
  mode: "production",
  build: {
      outDir: "../dist",
      assetsDir: "./"
  }
};
