function Row({movie}) {
    return(
        <tr>
          <td>{movie.titulo}</td>
          <td>{movie.duracion}</td>
          <td>{movie.rating}</td>
          <td>
            <ul>
                { Array.isArray(movie.generos) && movie.generos.map((genero,i) => <li key={i+genero}>{genero}</li>)}
            </ul>
          </td>
          <td>{movie.premios}</td>
        </tr>
    )
}

export default Row;