import Row from "./Row";

function Table() {

    const movies = [
        {
            titulo: "Billy Elliot",
            duracion: 150,
            rating: 9,
            generos: ["comedia", "drama"],
            premios: 3,
        },
        {
            titulo: "Alicia en el pais de las maravillas",
            duracion: 198,
            rating: 2,
            generos: ["animación", "comedia", "drama"],
            premios: 3,
        }
    ]

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Duración</th>
                    <th>Rating</th>
                    <th>Generos</th>
                    <th>Premios</th>
                </tr>
            </thead>
            <tbody>
                {
                    Array.isArray(movies) && movies.map((movie, i) => <Row key={i + movie.titulo} movie={movie} />)
                }
            </tbody>

        </table>
    )
}

export default Table;