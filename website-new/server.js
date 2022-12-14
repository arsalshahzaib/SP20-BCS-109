const express = require("express"); // npm install express
// if you dont have node_modules folder then run below command
// npm install node

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/contact-us", (req, res) => {
    res.render("contact-us");
});
app.get("/", (req, res) => {
    res.render("index");
});
app.listen(2000, () => {
    console.log("Server listening on port 2000...")
});

// execute this file with following command
// node server

// for auto refresh of the code install nodemon globally
// npm install nodemon -g
// then run the file with nodemon
// nodemon server
// npm install ejs