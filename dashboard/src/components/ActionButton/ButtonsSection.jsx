import React from 'react'
import ActionButton from './ActionButton'

const ButtonsSection = () => {
   const botones = [
      {
         label: "Ver productos",
         icono: "fas fa-tshirt fa-2x",
			color: "red"
      },
      {
         label: "Ver usuarios",
         icono: "fas fa-user fa-2x",
			color: "sky"
      }
   ]
   return (
      <div className="row flex justify-content-center mx-auto">
         {
            Array.isArray(botones) && botones.map((boton, i) => <ActionButton key={i + boton.label} label={boton.label.toUpperCase()} icono={boton.icono} color={boton.color}/>)
         }
      </div>
   )
}

export default ButtonsSection
