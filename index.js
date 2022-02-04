const express = require("express");

const app = express();

//static content
app.use(express.static("Static"));

//let code read things inside body
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/login", (req, res) => {
    res.redirect("Login.html");
});

app.get("/start", (req, res) => {
    res.redirect("Game.html");
});

app.get("/setting", (req, res) => {
    res.redirect("Setting.html");
});

app.get("/level1", (req, res) => {
    res.redirect("LevelOne.html");
});
app.get("/level2", (req, res) => {
    res.redirect("LevelTwo.html");
});
app.get("/level3", (req, res) => {
    res.redirect("LevelThree.html");
});

app.listen(80);
