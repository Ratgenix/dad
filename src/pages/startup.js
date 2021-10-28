import React from 'react'
import ContactBox from '../components/ContactBox'
import './pages.css'
function startup() {
    return (
        <div className='services-main'>
                            <div className='c-box-body'>
            <ContactBox/></div>
            <h1>Start-Up & Debug</h1>
            <hr/>
            <p>Carden Robotics' talented team has performed start-up and debugging to find the root cause of
                many problems.
            </p>
            <hr/>
            <h2>Start-Up & Debug for</h2>
            <div className='services-list'>
                <ul>
                    <li>Robots</li>
                    <li>PLC</li>
                    <li>Welding</li>
                </ul>
            </div>
            
        </div>
    )
}

export default startup
