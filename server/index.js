const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db/initializer");

db.initializer();
const app = express();
const router = require("./router");

app.use(bodyParser.json());
app.use(cors());
router(app);

const PORT = 2053;
app.listen(PORT, () => {
    console.log(`Server started on port`, PORT);
});
