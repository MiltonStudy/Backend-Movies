const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        "serie": "Gotham"
    });
});

module.exports = router;