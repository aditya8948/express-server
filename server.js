const express = require("express");
const booksRouter = require("./routes/books");

const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// Connect books router using app.use()
app.use("/books", booksRouter);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
