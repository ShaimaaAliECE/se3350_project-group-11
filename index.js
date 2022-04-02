require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')

mongoose.connect(process.env.MONGO_URL);

const PlayerSchema = new mongoose.Schema({
    account: String,
    password: String,
    email: String,
    playTime: {
        type: Number,
        default: 0
    }
});

const PlayerModel = mongoose.model("player", PlayerSchema);

const app = express();
app.use(cookieParser())

app.set("case sensitive routing", false);
//static content
app.use(express.static("Static"));
app.use(express.static("Game"));

//let code read things inside body
app.use(
    express.urlencoded({
        extended: false,
    })
);

app.get("/rank", async (req, res) => {
    const datas = await PlayerModel.find().lean();
    datas.sort((prev, next) => {
        return next - prev;
    });
    res.status(200).json(datas);
});

app.post("/players/register", async (req, res) => {
    const {account, password, email} = req.body;
    await PlayerModel.create({account, password, email});
    res.redirect("/login");
});

app.post("/players/login", async (req, res) => {
    const {account, password} = req.body;
    const oldPlayer = await PlayerModel.findOne({account, password});
    if (!oldPlayer) {
        return res.status(400).send("Vertify Failed!");
    }
    res.cookie("player", account, { maxAge: 365 * 24 * 60 * 60 * 1000, httpOnly: true });

    res.redirect("/game");
});

app.get("/register", (req, res) => {
   res.redirect("registered.html");
});

app.get("/login", (req, res) => {
    res.redirect("login.html");
});



app.get("/start", (req, res) => {
    res.redirect("Game.html");
});

app.get("/game", (req, res) => {
    res.redirect("Game.html");
})

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

app.get("/players/play-time", async(req, res) => {
    if (!(req.cookies && req.cookies.player)) {
        return res.status(204).send("No Content");
    }
    const account = req.cookies.player;
    const oldPlayer = await PlayerModel.findOne({account});
    res.status(200).send({time: oldPlayer.playTime});
})

app.get("/time", async (req, res) => {
    const account = req.cookies.player;
    const oldPlayer = await PlayerModel.findOne({account});
    const oldTime = oldPlayer.playTime;
    await PlayerModel.findByIdAndUpdate(oldPlayer._id, {
        playTime: oldTime + 5
    });

    res.status(204).send('No Content');
})


app.listen(8000);
