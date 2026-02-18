const express = require("express");
const app = express();

app.use(express.json());

// Main webhook endpoint
app.post("/", (req, res) => {

    // App usually sends message inside different fields
    // We safely extract it
    const userMessage =
        req.body.message ||
        req.body.text ||
        (req.body.messages && req.body.messages[0] && req.body.messages[0].text) ||
        "";

    let reply;

    if (userMessage.toLowerCase().includes("price")) {
        reply = "Price is 199 taka.";
    }
    else if (userMessage.toLowerCase().includes("hi")) {
        reply = "Hello bro 😎";
    }
    else {
        reply = "Thanks for messaging!";
    }

    res.json({
        replies: [
            {
                message: reply
            }
        ]
    });
});

// Health check (optional but good practice)
app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
