function ProductRow({ producto: producto }) {
    return (
        <tr>
            <td>{producto.idProd}</td>
            <td>
                <img className="img-fluid rounded-lg" src={producto.imagen} alt={producto.titulo} style={{ maxWidth: '80px'}} />
            </td>
            <td>{producto.categoria}</td>
            <td>{producto.nombreProd}</td>
            <td>{producto.talle}</td>
            <td>{producto.precio}</td>
            <td>{producto.descripcion}</td>
        </tr>
    )
}

export default ProductRow
