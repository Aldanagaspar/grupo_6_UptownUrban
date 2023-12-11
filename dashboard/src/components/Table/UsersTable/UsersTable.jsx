import UserRow from "./UserRow";
import { getUsers } from "../../../services/userServices";
import React, { Component } from "react";
class UsersTable extends Component {
    
    constructor(){
        super()
        this.state = {
            usuarios:[]
        }
    }

    async componentDidMount(){
        
        const response = await getUsers()
        this.setState({user: response})
 


    //     fetch('http://localhost:8000/api/users')
    //     .then(res => res.json())
    //     .then(data => {
    //     console.log(data);
    //     this.setState({
    //         usuarios:data
    //     })
    //     })
    // .catch(console.log)
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
                            Array.isArray(this.setState.usuarios) && this.setState.usuarios.map((usuario) => <UserRow key={usuario.id} usuario={usuario} />)
                        }
                    </tbody>
    
                </table>
            </div>
        )
                    }
}
export default UsersTable;