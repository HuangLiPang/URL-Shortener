exports.renderPage = function (req, res) {
    res.sendFile(path.join(__dirname + "/client/public/index.html"));
};
