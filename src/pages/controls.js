import React from 'react'
import ContactBox from '../components/ContactBox'
import './pages.css'
function controls() {
    return (
        <>
                            <div className='c-box-body'>
            <ContactBox/></div>
            <div className="services-main">
            <h1>Controls Design</h1>
            <hr/>
            <p>One of Carden Robotics' area of expertice is in robot programming.
                The Carden Robotics team has worked on various projects both implementing and
                troubleshooting control designs.
            </p>
            <hr/>
            <h2>Implementation and Troubleshooting in collaboration with</h2>
            <div className="services-list">
            <ul>
                <li>Allen Bradley</li>
                <li>Siemens</li>
            </ul>
            </div>
        </div>
        </>
    )
}

export default controls
