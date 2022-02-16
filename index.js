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

app.listen(80);
