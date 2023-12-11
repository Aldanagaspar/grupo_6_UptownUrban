import UserRow from "./UserRow";

function UsersTable() {

    const usuarios = [
        {
            id: 1,
            profilePicture: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
            fullname: "Ernesto Márquez",
            email: "ermar99@gmail.com"
        },
        {
            id: 2,
            profilePicture: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
            fullname: "Javier Alonso Herrera",
            email: "herrerajavi1998@gmail.com"
        }
    ]

    return (
        <div className="container-fluid">
            <table className="transition-all ease-in bg-white table table-responsive-sm border border-gray-800 mx-auto rounded rounded-xl hover:shadow-lg hover:shadow-slate-200 mb-4">
                <thead>
                    <tr>
                        <th className="text-gray-900">ID</th>
                        <th className="text-gray-900">Foto de Perfil</th>
                        <th className="text-gray-900">Nombre Completo</th>
                        <th className="text-gray-900">Correo Electrónico</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(usuarios) && usuarios.map((usuario) => <UserRow key={usuario.id} usuario={usuario} />)
                    }
                </tbody>

            </table>
        </div>
    )
}

export default UsersTable;