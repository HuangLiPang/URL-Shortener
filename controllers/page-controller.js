const path = require("path");

exports.renderPage = function (req, res) {
    console.log(path.normalize(__dirname + "/../client/public/index.html"));
    res.sendFile("index.html");
};
