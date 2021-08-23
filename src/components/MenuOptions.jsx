import React from 'react'

function MenuOptions({ option }) {
    return (
        <li>
            <a href="#">{ option.nombre }</a>
        </li>
    )
}

export default MenuOptions
