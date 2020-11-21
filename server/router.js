const shortenerController = require("./controllers/shortener-controller");

module.exports = (app) => {
    app.get("/s/:code", shortenerController.redirectUrl);
    app.post("/api/shorten", shortenerController.shortener);
};
