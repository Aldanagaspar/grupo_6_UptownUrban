import Row from "./Row";

function Table() {

    const categorias = [
        {
            titulo: "Remeras y Camisas",
            cantidad: 73
        },
        {
            titulo: "Pantalones",
            cantidad: 88
        },
        {
            titulo: "Calzado",
            cantidad: 150
        },
        {
            titulo: "Accesorios",
            cantidad: 56
        }
    ]

    return (
        <div className="container-fluid">
            <table className="transition-all ease-in bg-white table table-responsive-sm w-100 border border-gray-800 mx-auto text-center rounded rounded-xl hover:shadow-lg hover:shadow-slate-200 mb-4">
                <thead>
                    <tr>
                        <th className="text-gray-900">Categoría</th>
                        <th className="text-gray-900">N° de productos</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(categorias) && categorias.map((categoria, i) => <Row key={i + categoria.titulo} categoria={categoria} />)
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Table;