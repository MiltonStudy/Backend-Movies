const express = require('express');
const morgan = require('morgan');
const routerAPI = require('./routes')

const app = express();

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.urlencoded({ extensed: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        "title": "Hola mundo"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});

routerAPI(app);