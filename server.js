const express = require("express");

const app = express();

app.use(express.json());

// Dynamic GET route with route parameter and query parameter
app.get("/welcome/:username", (req, res) => {
    const username = req.params.username;
    const role = req.query.role;

    if (role) {
        res.send(`Welcome ${username}, your role is ${role}`);
    } else {
        res.send(`Welcome ${username}`);
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
