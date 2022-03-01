const path = require("path");

module.exports = {
    mode: "production",
    entry: "./assets/js/script.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
};