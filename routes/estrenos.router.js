const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        "estreno": "Los juegos del hambre"
    });
});

module.exports = router;