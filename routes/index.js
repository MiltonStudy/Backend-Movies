const moviesRouter = require('./movies.router');
const seriesRouter = require('./series.router');
const estrenosRouter = require('./estrenos.router');

function routerAPI(app) {
    app.use('/movies', moviesRouter);
    app.use('/series', seriesRouter);
    app.use('./estrenos', estrenosRouter);
}

module.exports = routerAPI;