const express = require('express');
const app = express();
const port = 9090;
function isPrime(number) {
    if (number <= 1)
        return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0)
            return false;
    }
    return true;
}
app.get('/assignments/prime/:number', (req, res) => {
    const number = parseInt(req.params.number);
    if (isNaN(number)) {
        return res.json({ error: "Please provide a valid number." });
    }
    const result = isPrime(number);
    res.json({ isPrime: result });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//# sourceMappingURL=assignment.controller.js.map