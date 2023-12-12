function UserRow({ usuario: usuario }) {
    return (
        <tr>
            <td>{usuario.id}</td>
            <td>
                <img className="img-fluid rounded-lg" src={usuario.profilePicture} alt={usuario.fullname} style={{ maxWidth: '80px'}} />
            </td>
            <td>{usuario.fullname}</td>
            <td>{usuario.email}</td>
        </tr>
    )
}

export default UserRow
