import React from 'react'
import { useState, useEffect } from "react";

function Toggle() {
    const [open, setOpen] = useState(0)

    useEffect(() => {
        
        const menuToggle = document.querySelector('.toggle')
        const menu = document.querySelector('.showcase')
        menuToggle.classList.toggle('active')
        menu.classList.toggle('active')

    }, [open])
    return (
        <div className='toggle active' onClick={() => setOpen(open + 1)}>
            
        </div>
    )
}

export default Toggle
