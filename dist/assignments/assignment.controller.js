const express = require('express');
const app = express();
const port = 9090;
app.get('/assignments/fibonacci/:n', (req, res) => {
    const n = parseInt(req.params.n);
    if (isNaN(n) || n < 1) {
        return res.status(400).json({ error: "Please provide a positive integer for 'n'." });
    }
    const sequence = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        sequence.push(a);
        [a, b] = [b, a + b];
    }
    res.json({ sequence });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//# sourceMappingURL=assignment.controller.js.map