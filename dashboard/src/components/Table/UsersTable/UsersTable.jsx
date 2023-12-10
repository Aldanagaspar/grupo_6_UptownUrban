import UserRow from "./UserRow";
import {getUser } from "../../../services/userServices";
import React, { Component } from "react";
class UsersTable extends Component {
    
    constructor(){
        super()
        this.state = {
            usuario:[]
        }
    }

    async componentDidMount(){
        const response = await getUser()
        this.setState({usuario: response})
    }

    render() {
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
                            Array.isArray(this.state.usuario) && this.state.usuario.map((usuario) => <UserRow key={usuario.id} usuario={usuario} />)
                        }
                    </tbody>

                </table>
            </div>
        )
    }
}
export default UsersTable;