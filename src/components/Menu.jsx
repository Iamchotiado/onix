import React from 'react'
import MenuOptions from './MenuOptions'

const options = [
    {
        nombre: 'Inicio'
    },
    {
        nombre: 'Cotiza con nosotros'
    },
    {
        nombre: 'Sobre Nosotros'
    },
    {
        nombre: 'Contactanos'
    },
]
function Menu() {
    return (
        <div className='menu'>
            <ul>
            {options.map((option) => (
                <MenuOptions option={option} />
            ))}
            </ul>
        </div>
    )
}

export default Menu
