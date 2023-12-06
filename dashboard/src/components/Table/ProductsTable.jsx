import Row from "./Row";

function Table() {

    const categorias = [
        {
            imagen: "url-de-la-imagen",
            titulo: "Camiseta Suplente Selección Argentina Campeón Qatar 2022 3 Estrellas",
            categoria: "Remeras y Camisas",
            precio: 333,
            descripcion: "Descripción mediana que habla sobre los detalles del producto y otras cosas relevantes"
        },
        {
            imagen: "url-de-la-imagen",
            titulo: "Camiseta Suplente Selección Argentina Campeón Qatar 2022 3 Estrellas",
            categoria: "Remeras y Camisas",
            precio: 333,
            descripcion: "Descripción mediana que habla sobre los detalles del producto y otras cosas relevantes"
        },
        {
            imagen: "url-de-la-imagen",
            titulo: "Camiseta Suplente Selección Argentina Campeón Qatar 2022 3 Estrellas",
            categoria: "Remeras y Camisas",
            precio: 333,
            descripcion: "Descripción mediana que habla sobre los detalles del producto y otras cosas relevantes"
        },
        {
            imagen: "url-de-la-imagen",
            titulo: "Camiseta Suplente Selección Argentina Campeón Qatar 2022 3 Estrellas",
            categoria: "Remeras y Camisas",
            precio: 333,
            descripcion: "Descripción mediana que habla sobre los detalles del producto y otras cosas relevantes"
        },
    ]

    return (
        <div className="container-fluid">
            <table className="transition-all ease-in bg-white table w-100 border border-gray-800 mx-auto text-center rounded rounded-xl hover:shadow-lg hover:shadow-slate-200 mb-4">
                <thead>
                    <tr>
                        <th className="text-gray-900">Categoría</th>
                        <th className="text-gray-900">N° de productos</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(categorias) && categorias.map((categoria, i) => <Row key={i + categoria.titulo} movie={categoria} />)
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Table;