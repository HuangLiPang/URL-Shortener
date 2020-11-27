const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;

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
    mongoose
        .connect(mongoURI, {
            keepAlive: true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        .then((connection) => {
            connection.db.dropDatabase();
        });

    mongoose.model("shorten", urlShortenSchema);
};
