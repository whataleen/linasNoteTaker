
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

for (let i = 0; i < operation.length; i++) {
    router.use(operation[i]);
};







router.listen(PORT, () => console.log(`note taking app is listening on port ${PORT
    }`));

