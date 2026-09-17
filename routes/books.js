const express = require("express");

const router = express.Router();

// GET /books: Print a message and send response
router.get(["/", "/books"], (req, res) => {
    console.log("Fetching the list of books...");
    res.send("Here is the list of books!");
});

// POST /books: Print the book data sent in the request and send response
router.post(["/", "/books"], (req, res) => {
    console.log("Book data received:", req.body);
    res.send("Book has been added!");
});

module.exports = router;
