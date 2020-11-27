const mongoose = require("mongoose");
const mongoURI =
    "mongodb+srv://huanglipang:huanglipang@cluster0.3jp43.mongodb.net/url-shortener?retryWrites=true&w=majority";

const { Schema } = mongoose;
const urlShortenSchema = new Schema(
    {
        originalUrl: String,
        uniquePath: String,
        shortUrl: String,
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    {
        collection: "shortener",
    }
);

exports.initializer = function () {
    mongoose.Promise = global.Promise;
    mongoose.set("debug", true);
    mongoose.connect(mongoURI, {
        keepAlive: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });

    mongoose.model("shorten", urlShortenSchema);
};
