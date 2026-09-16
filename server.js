const express = require("express");

const app = express();

app.use(express.json());

// Custom middleware function to add req.user property
const setUser = (req, res, next) => {
    req.user = "Guest";
    next();
};

app.get("/", (req, res) => {
    res.send("hello from express server ");
});

// Route where setUser middleware is applied
app.get("/welcome", setUser, (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});


app.listen(3000, () => {
    console.log("server is runnnig onn port 3000")
})