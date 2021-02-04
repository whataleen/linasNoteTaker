const path = require('path');
const fs = require('fs');
function crud(self) {

    fs.readFile('db/db.json', "utf8", (err, data) => {
        if (err) throw err;

        var notes = JSON.parse(data);

        //show all on side bar
        self.get('/api/notes', function (req, res) {

            res.json(notes);
            console.log(notes);
            //console.log(res.json(notes));
            console.log("showing all on side bar");

        });



        //add
        self.post('/api/notes', function (req, res) {
            let addedElement = req.body;
            notes.push(addedElement);
            updateJson();
            res.redirect('/');
            return console.log(`Added new note with the title ${addedElement.title}`);
        });


        //delete
        self.delete('/api/notes/:title', function (req, res) {
            notes.splice(req.params.title, 1);
            updateJson();
            console.log("Deleted note.");
            res.redirect('/');
        });





        self.get('/notes', function (req, res) {
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        });
        self.get('*', function (req, res) {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });

        function updateJson() {
            fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), err => {
                if (err) throw err;
                return true;
            });
        }
    });



}

module.exports = crud;