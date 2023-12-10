export async function getUser(){
    try{
        const response = await fetch("http://localhost:3000/")
        const data = await response.json()
        if(response.status !== 200) throw new Error("Error en la conexion")
    
        return data.data
        } catch(error){
            console.log(error)
    }
}