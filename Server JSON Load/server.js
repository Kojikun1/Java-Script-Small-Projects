const express = require('express');

const app = express();

const PORT = 3000

app.use(express.static('content'));

app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT}`);
});