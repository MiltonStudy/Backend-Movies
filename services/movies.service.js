const { getConnection } = require('./../database')

class MoviesService {

    async create(movie) {
        const connection = await getConnection();
        const result = await connection.query(
            `INSERT INTO movies VALUES (
                null,
                '${movie.movie}',
                '${movie.description}',
                '${movie.director}',
                '${movie.urlImagen}',
                '${movie.yearOfPublication}');`
        );

        return {
            "message": "Pelicula registrada con exito",
            "data": await this.findOne(result.insertId)
        };
    }

    async find() {
        const connection = await getConnection();

        try {
            const result = await connection.query("SELECT * FROM movies;");
            return result;
        } catch (exception) {
            console.log(exception);
        }
    }

    async findOne(id) {
        const connection = await getConnection();

        try {
            const result = await connection.query(`SELECT * FROM movies WHERE id_movie = ${id}`);

            if (!(Object.keys(result).length === 0)) { return result; }

            return { "message": "Pelicula no encontrada" };
        } catch (exception) {
            console.log(exception);
        }
    }

    async update(movie) {
        const connection = await getConnection();

        try {
            const movieResult = await connection.query(`SELECT id_movie FROM movies WHERE id_movie = ${movie.id}`);

            if (!(Object.keys(movieResult).length === 0)) {
                const result = await connection.query(
                    `UPDATE movies SET movie = '${movie.movie}',
                    description = '${movie.description}',
                    director = '${movie.director}',
                    url_imagen = '${movie.urlImagen}',
                    year_of_publication = '${movie.yearOfPublication}'
                    WHERE id_movie = ${movie.id};`
                );

                return {
                    "message": "Pelicula actualizada con exito",
                    "data": await this.findOne(result.id)
                };
            }

            return { "message": "Pelicula no encontrada" };
        } catch (exception) {
            console.log(exception);
        }
    }

    async delete(id) {
        const connection = await getConnection();

        try {
            const movieResult = await connection.query(`SELECT id_movie FROM movies WHERE id_movie = ${id}`);

            if (!(Object.keys(movieResult).length === 0)) {
                await connection.query(`DELETE FROM movies WHERE id_movie = ${id}`);
                return {
                    id,
                    "message": "Pelicula eliminada con exito"
                };
            }

            return { "message": "Pelicula no encontrada" };
        } catch (exception) {
            console.log(exception);
        }
    }

}

module.exports = MoviesService;