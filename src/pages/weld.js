import React from 'react'
import ContactBox from '../components/ContactBox'
function weld() {
    return (
        <div className='services-main'>
                            <div className='c-box-body'>
            <ContactBox/></div>
            <h1>Weld Support</h1>
            <hr/>
            <p>One of Carden Robotics' area of expertice is in robot programming.
                The Carden Robotics team has worked on various projects such as [blah and blah] in this field.
            </p>
            <hr/>
            <div className="services-list">
                <div className='weld1'>
               
                <h2>Welding Types</h2>
                <ul>
                    <li>Resistance Spot Welding</li>
                    <li>Mig Welding</li>
                    <li>Laser/Braze Welding</li>
                    <li>Fusion Welding</li>
                </ul>
                </div>
                <div className="weld2">
                <h2>Welding Applications</h2>
                <ul>
                    <li>Sealing</li>
                    <li>Riveting</li>
                    <li>Adhesive Applications</li>
                </ul>
                
                </div>
            </div>
        </div>
    )
}

export default weld
