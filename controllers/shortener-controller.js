const mongoose = require("mongoose");
const validUrl = require("valid-url");
const shortid = require("shortid");

const HEROKU_APP_NAME = process.env.HEROKU_APP_NAME;
const shortBaseUrl = `http(s)://${HEROKU_APP_NAME}.herokuapp.com`;

const Shorten = mongoose.model("shorten");

exports.redirectUrl = async function (req, res) {
    const uniquePath = req.params.code;
    const item = await Shorten.findOne({ uniquePath: uniquePath });
    if (item) {
        res.redirect(item.originalUrl);
    } else {
        res.status(404).send("Sorry can't find that!");
    }
    console.log(item);
};

exports.shortener = async function (req, res) {
    const { originalUrl } = req.body;

    const now = new Date();
    const dbQueryOptions = req.body;
    console.log(dbQueryOptions);
    if (validUrl.isUri(originalUrl)) {
        const urlData = await Shorten.findOne(dbQueryOptions);
        if (urlData) {
            res.status(200).json(urlData);
            console.log(1, urlData);
        } else {
            const uniquePath = shortid.generate();
            const shortUrl = shortBaseUrl + "/s/" + uniquePath;
            const shortenInfo = {
                originalUrl,
                shortUrl,
                uniquePath,
                createdAt: now,
            };
            console.log(2, shortenInfo);
            // Add the item to db
            const item = new Shorten(shortenInfo);
            await item.save();
            res.status(200).json(shortenInfo);
        }
    } else {
        res.status(400).json("Invalid Original Url.");
    }
};
