const path = require("path");
const fs = require("fs");
const express = require("express");

const router = express();
const PORT = process.env.PORT || 8080;

const parse = {
    extended: true
};

const operation = [
    express.urlencoded(parse),
    express.json(),
    express.static("public")

];







router.listen(PORT, () => console.log(`note taking app is listening on port ${PORT
    }`));