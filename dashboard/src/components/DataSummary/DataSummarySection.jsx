import Card from "./DataSummaryCard/DataSummaryCard"

function DataSummary() {
  const listado = [
    {
      titulo: "Productos totales",
      cifra: '???',
      icono: "fas fa-tshirt fa-2x"
    },
    {
      titulo: "Usuarios registrados",
      cifra: '???',
      icono: "fas fa-user fa-2x",
    },    
    {
      titulo: "Categorías cargadas",
      cifra: '???',
      icono: "fas fa-tag fa-2x",
    },    
    {
      titulo: "Productos vendidos",
      cifra: '???',
      icono: "fas fa-cash-register fa-2x",
    },    
    {
      titulo: "Dinero recaudado",
      cifra: '???',
      icono: "fas fa-dollar-sign fa-2x",
    }
  ]
  return (
    <div className="row flex justify-content-center">
      {
        Array.isArray(listado) && listado.map((card, i) => <Card key={i+card.titulo} titulo={card.titulo} cifra={card.cifra} icono={card.icono}/>)
      }

    </div>
  )
}

export default DataSummary;