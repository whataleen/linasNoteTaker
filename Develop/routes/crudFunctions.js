const path = require("path");
const fs = require("fs");

function crud(self) {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        var notes = JSON.parse(data);
        // show al notes on side bar
        self.get("/api/notes", (req, res) => {
            res.json(notes);
            console.log("showing all notes on side bar...");
        })
    });
    self.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "../public/notes.html")));

    self.get("*", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));


}

module.exports = crud;

