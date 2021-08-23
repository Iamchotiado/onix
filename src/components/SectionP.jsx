import React from 'react'
import Header from './Header'
import Video from './Video'
import VideoOverlay from './VideoOverlay'
import VideoTopText from './VideoTopText'
import SocialMedias from './SocialMedias'
function SectionP() {
    return (
        <section className='showcase active'>
            <Header />
            <Video />
            <VideoOverlay />
            <VideoTopText />
            <SocialMedias />
        </section>
    )
}

export default SectionP
