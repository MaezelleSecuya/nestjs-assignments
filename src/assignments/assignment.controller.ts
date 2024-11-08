const express = require('express');
const app = express();
const port = 9090;

function calculateFactorial(number) {
    if (number < 0) return null; 
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}


app.get('/assignments/factorial/:number', (req, res) => {
    const number = parseInt(req.params.number);


    if (isNaN(number) || number < 0) {
        return res.status(400).json({ error: "Please provide a non-negative integer." });
    }

    const factorial = calculateFactorial(number);
    res.json({ factorial });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
