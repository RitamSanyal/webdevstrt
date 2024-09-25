var figlet = require("figlet");

figlet("Bolo Durga Maye Ki Joy", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});