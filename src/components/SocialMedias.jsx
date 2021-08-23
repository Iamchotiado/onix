import React from 'react'
import SocialMedia from './SocialMedia'

const social_medias = [
    {
        name: 'Instagram',
        src: 'https://onix-estudios.s3.eu-west-2.amazonaws.com/instagram_f_icon-icons.com_65485.png',
        link: 'https://www.instagram.com/chelseafc/'
    },
    {
        name: 'Facebook',
        src: 'https://onix-estudios.s3.eu-west-2.amazonaws.com/fb_icon-icons.com_65434+(1).png',
        link: 'https://www.instagram.com/arsenal/'
    }
]
function SocialMedias() {
    return (
        <ul className='social'>
            {social_medias.map((media) => (
                <SocialMedia icon={media} />
            ))}
        </ul>
    )
}

export default SocialMedias
