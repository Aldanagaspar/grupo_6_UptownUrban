import React from 'react'

const ActionButton = (props) => {
    const {
        label = "Acción",
        icono = "fas fa-dot-circle fa-2x",
        color = "gray"
    } = props

    return (
        <a href="#" className={`transition-all ease-in flex flex-column p-4 m-3 rounded rounded-xl border-2 hover:no-underline hover:border-${color}-400 hover:text-${color}-400 hover:shadow-lg hover:bg-white hover:shadow-${color}-200`}>
            <i className={`${icono} mt-2 mb-3 text-center text-gray-600`}></i>
            <h5 className="text-center text-sm font-bold text-gray-600"> {label} </h5>
        </a>
    )
}

export default ActionButton
