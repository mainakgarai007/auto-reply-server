const express = require("express");
const app = express();

app.use(express.json());

app.post("/", (req, res) => {
    const userMessage = req.body.message;

    let reply;

    if (userMessage && userMessage.toLowerCase().includes("price")) {
        reply = "Price is 199 taka.";
    } else {
        reply = "Thanks for messaging!";
    }

    res.json({
        reply: reply
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
