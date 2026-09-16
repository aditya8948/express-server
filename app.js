const express = require("express");

const app = express();

app.use(express.json());

// Products endpoints
app.get("/products", (req, res) => {
    res.send("Here is the list of all products.");
});

app.post("/products", (req, res) => {
    res.send("A new product has been added.");
});

// Categories endpoints
app.get("/categories", (req, res) => {
    res.send("Here is the list of all categories.");
});

app.post("/categories", (req, res) => {
    res.send("A new category has been created.");
});

// Wildcard route (*) to handle all undefined routes
// In Express 5 (path-to-regexp v8), wildcard paths require a parameter name like /{*splat}
app.all("/{*splat}", (req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
