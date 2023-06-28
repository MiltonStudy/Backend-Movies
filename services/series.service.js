const { getConnection } = require('./../database');

class SeriesService {

    async create(serie) {
        const connection = await getConnection();
        const result = await connection.query(
            `INSERT INTO series VALUES (
                null,
                '${serie.serie}',
                '${serie.description}',
                '${serie.fechaEstreno}',
                '${serie.numeroCapitulos}',
                '${serie.numeroTemporadas}'
            );`
        );

        return {
            "message": "Serie registrada cone exito",
            "data": await this.findOne(result.insertId)
        };
    }

    async find() {
        const connection = await getConnection();

        try {
            const result = await connection.query('SELECT * FROM series;');
            return result;
        } catch (exception) {
            console.log(exception);
        }
    }

    async findOne(id) {
        const connection = await getConnection();

        try {
            const result = await connection.query(`SELECT * FROM series WHERE id_serie = ${id}`);

            if (!(Object.keys(result).length === 0)) { return result }

            return { "message": "Serie no encontrada" };
        } catch (exception) {
            console.log(exception);
        }
    }

    async update(serie) {
        const connection = await getConnection();

        try {
            const result = await connection.query(`SELECT id_serie from series WHERE id_serie = ${serie.id}`);

            if (!(Object.keys(result).length === 0)) {
                const result = await connection.query(
                    `UPDATE series SET serie = '${serie.serie}',
                    description = '${serie.description}',
                    fecha_estreno = '${serie.fechaEstreno}',
                    numero_capitulos = ${serie.numeroCapitulos},
                    numero_temporadas = ${serie.numeroTemporadas}
                    WHERE id_serie = ${serie.id};`
                );

                return {
                    "message": "Serie actualizada con exito",
                    "data": await this.findOne(serie.id)
                };
            }

            return { "message": "Serie no encontrada" }
        } catch (exception) {
            console.log(exception);
        }
    }

    async delete(id) {
        const connection = await getConnection();

        try {
            const result = await connection.query(`SELECT id_serie FROM series WHERE id_serie = ${id}`);

            if (!(Object.keys(result).length === 0)) {
                await connection.query(`DELETE FROM series WHERE id_serie = ${id}`);
                return {
                    id,
                    "message": "Serie eliminada con exito"
                };
            }

            return { "message": "Serie no encontrada" };
        } catch (exception) {
            console.log(exception);
        }
    }

}

module.exports = SeriesService;