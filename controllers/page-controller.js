const path = require("path");

exports.renderPage = function (req, res) {
    res.sendFile(path.normalize(__dirname + "/../client/public/index.html"));
};
