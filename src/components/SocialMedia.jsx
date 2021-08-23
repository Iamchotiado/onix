import React from 'react'


function SocialMedia({ icon }) {
    return (
        <li>
            <a href={icon.link} target='_blank'>
                <img src={icon.src} alt="" />
            </a>
        </li>
    )
}

export default SocialMedia
