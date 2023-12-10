export async function getUsers(){
    try{
        const response = await fetch("http://localhost:8000/api/users", { method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json'}),
        mode: 'no-cors'
     })
        const data = await response.json()
        if(response.status !== 200) throw new Error("Error en la conexion")
    
        return data.data
        } catch(error){
            console.log(error)
    }
}