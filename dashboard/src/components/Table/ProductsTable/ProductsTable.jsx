import ProductRow from "./ProductRow";

function ProductsTable() {

    const productos = [
        {
            idProd: 1,
            imagen: "https://acdn.mitiendanube.com/stores/001/568/017/products/proyecto-nuevo-21-62046404c0f2870af316758649037177-1024-1024.png",
            nombreProd: "Camiseta Suplente Selección Argentina Campeón Qatar 2022 3 Estrellas",
            categoria: "Remeras y Camisas",
            talle: 'L',
            precio: 333,
            descripcion: "Descripción mediana que habla sobre los detalles del producto y otras cosas relevantes"
        },
        {
            idProd: 2,
            imagen: "https://acdn.mitiendanube.com/stores/001/568/017/products/proyecto-nuevo-21-62046404c0f2870af316758649037177-1024-1024.png",
            nombreProd: "Camiseta Suplente Selección Argentina Campeón Qatar 2022 3 Estrellas",
            categoria: "Remeras y Camisas",
            talle: 'L',
            precio: 333,
            descripcion: "Descripción mediana que habla sobre los detalles del producto y otras cosas relevantes"
        },
        {
            idProd: 3,
            imagen: "https://acdn.mitiendanube.com/stores/001/568/017/products/proyecto-nuevo-21-62046404c0f2870af316758649037177-1024-1024.png",
            nombreProd: "Camiseta Suplente Selección Argentina Campeón Qatar 2022 3 Estrellas",
            categoria: "Remeras y Camisas",
            talle: 'L',
            precio: 333,
            descripcion: "Descripción mediana que habla sobre los detalles del producto y otras cosas relevantes"
        },
        {
            idProd: 4,
            imagen: "https://acdn.mitiendanube.com/stores/001/568/017/products/proyecto-nuevo-21-62046404c0f2870af316758649037177-1024-1024.png",
            nombreProd: "Camiseta Suplente Selección Argentina Campeón Qatar 2022 3 Estrellas",
            categoria: "Remeras y Camisas",
            talle: 'L',
            precio: 333,
            descripcion: "Descripción mediana que habla sobre los detalles del producto y otras cosas relevantes"
        },
    ]

    return (
        <div className="container-fluid">
            <table className="transition-all ease-in table table-responsive-sm bg-white w-100 border border-gray-800 mx-auto rounded rounded-xl hover:shadow-lg hover:shadow-slate-200 mb-4">
                <thead>
                    <tr>
                        <th className="text-gray-900">ID</th>
                        <th className="text-gray-900">Imagen</th>
                        <th className="text-gray-900">Categoría</th>
                        <th className="text-gray-900">Nombre del Producto</th>
                        <th className="text-gray-900">Talle</th>
                        <th className="text-gray-900">Precio (ARS)</th>
                        <th className="text-gray-900">Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(productos) && productos.map((producto) => <ProductRow key={producto.idProd} producto={producto} />)
                    }
                </tbody>

            </table>
        </div>
    )
}

export default ProductsTable;