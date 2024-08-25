const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!data) {
        return res.status(400).json({
            is_success: false,
            user_id: "sarthak_gangwar_21112003",  // Use your format here
            email: "sarthakgangwar2003@gmail.com",
            roll_number: "21BPS1518",
            message: "Invalid data input"
        });
    }

    let numbers = [];
    let alphabets = [];
    let highestLowercaseAlphabet = "";

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (/[a-zA-Z]/.test(item)) {
            alphabets.push(item);
            if (/[a-z]/.test(item)) {
                if (highestLowercaseAlphabet === "" || item > highestLowercaseAlphabet) {
                    highestLowercaseAlphabet = item;
                }
            }
        }
    });

    res.status(200).json({
        is_success: true,
        user_id: "sarthak_gangwar_21112003",  // Use your format here
        email: "sarthakgangwar2003@gmail.com",
        roll_number: "21BPS1518",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    });
});

// GET Route: /bfhl
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
