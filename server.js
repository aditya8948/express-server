const express = require("express");

const app = express();

app.use(express.json());

// Custom middleware
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

// Orders endpoints
app.get("/orders", (req, res) => {
    res.send("Here is the list of all orders.");
});

app.post("/orders", (req, res) => {
    res.send("A new order has been created.");
});

// Users endpoints
app.get("/users", (req, res) => {
    res.send("Here is the list of all users.");
});

app.post("/users", (req, res) => {
    res.send("A new user has been added.");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});