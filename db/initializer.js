const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI;
const COLLECTION = process.env.COLLECTION;

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
        collection: COLLECTION,
    }
);

exports.initializer = function () {
    mongoose.Promise = global.Promise;
    mongoose.set("debug", true);
    mongoose.connect(MONGODB_URI, {
        keepAlive: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    mongoose.connection.on("connected", () => {
        mongoose.connection.db.dropCollection(COLLECTION, (err, result) => {
            if (err) {
                console.error(`${COLLECTION} does not exist.`);
            } else {
                console.log(result);
            }
        });
    });

    mongoose.model("shorten", urlShortenSchema);
};
