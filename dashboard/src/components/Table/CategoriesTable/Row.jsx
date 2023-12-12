function Row({categoria: categoria}) {
    return(
        <tr>
          <td>{categoria.titulo}</td>
          <td>{categoria.cantidad}</td>
        </tr>
    )
}

export default Row;