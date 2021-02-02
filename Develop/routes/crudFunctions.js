const path = require("path");
const fs = require("fs");

function crud(self) {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        var notes = JSON.parse(data);
    });
}

