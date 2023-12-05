function Row({movie: categoria}) {
    return(
        <tr>
          <td>{categoria.titulo}</td>
          <td>{categoria.cantidad}</td>
          <td>
            <ul>
                { Array.isArray(categoria.categorias) && categoria.categorias.map((categoria,i) => <li key={i+categoria}>{categoria}</li>)}
            </ul>
          </td>
        </tr>
    )
}

export default Row;