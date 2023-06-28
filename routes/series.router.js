const express = require('express');
const SeriesService = require('./../services/series.service');
const router = express.Router();

const seriesService = new SeriesService();

router.get('/', async (req, res) => {
    const series = await seriesService.find();
    res.json(series);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const serie = await seriesService.findOne(id);
    res.json(serie);
});

router.post('/', async (req, res) => {
    const serie = {
        "serie": req.body.serie,
        "description": req.body.description,
        "fechaEstreno": req.body.fechaEstreno,
        "numeroCapitulos": req.body.numeroCapitulos,
        "numeroTemporadas": req.body.numeroTemporadas
    };

    const newSerie = await seriesService.create(serie);
    res.json(newSerie);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const serie = {
        "id": parseInt(id),
        "serie": req.body.serie,
        "description": req.body.description,
        "fechaEstreno": req.body.fechaEstreno,
        "numeroCapitulos": req.body.numeroCapitulos,
        "numeroTemporadas": req.body.numeroTemporadas
    };

    const updateSerie = await seriesService.update(serie);
    res.json(updateSerie);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deleteSerie = await seriesService.delete(id);
    res.json(deleteSerie);
});

module.exports = router;