const express = require("express");
const productRoutes = require("./routes/products");
const categoryRoutes = require("./routes/categories");

const app = express();

app.use(express.json());

// Logging Middleware: logs HTTP method and endpoint accessed
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

// Connect routers to main server file
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);

// 404 Fallback for undefined routes
app.use((req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
