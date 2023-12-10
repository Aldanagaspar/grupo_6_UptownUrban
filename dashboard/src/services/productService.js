export async function getProduct(){
    try{
    const response = await fetch("")
    const data = await response.json()

    if(response.status !== 200) throw new Error("Error en la conexion")
    
    return data.data
    } catch(error){
        console.log(error)
    }
}