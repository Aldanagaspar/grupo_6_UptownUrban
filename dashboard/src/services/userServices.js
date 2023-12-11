// export async function getUsers(){
//     try{
//         const response = await fetch("http://localhost:8000/api/users", {method: 'GET'});
//         console.log("devolviendo usuarios", response)
//         const data = await response.json()
        
//         if(response.status !== 200) throw new Error("Error en la conexion")
    
//         return data.data
//         } catch(error){
//             console.log(error)
//     }
// }

export async function getUsers(){
    try{
        const response = await fetch("http://localhost:8000/api/users" , {method: 'GET'})
        const data = await response.json()
        if(response.status !== 200) throw new Error("Error en la conexion")
    
        return data.data
        } catch(error){
            console.log(error)
    }
}