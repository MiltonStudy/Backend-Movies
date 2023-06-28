const moviesRouter = require('./movies.router');
const seriesRouter = require('./series.router');

function routerAPI(app) {
    app.use('/movies', moviesRouter);
    app.use('/series', seriesRouter);
}

module.exports = routerAPI;