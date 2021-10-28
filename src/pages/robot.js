import React from 'react'
import ContactBox from '../components/ContactBox'
import "./pages.css"
function robot() {
    return (
        <div className='services-main'>
                            <div className='c-box-body'>
            <ContactBox/></div>
            <h1>Robot Programming</h1>
            <hr/>
            <p>One of Carden Robotics' area of expertice is in robot programming.
                The Carden Robotics team has worked on various projects such as ABB and Fanuac in this field. Additionally, many 
                people on the Carden Robotics team are GM Certified.
            </p>
            <hr/>
           
            <div className='services-list'>
                <div className='weld1'>
                <h2>Robotics Programming for the following companies</h2>
                <ul>
                    <li>Abb</li>
                    <li>Comau</li>
                    <li>Epson</li>
                    <li>Fanuac</li>
                    <li>Kawaskai</li>
                    <li>Kuka</li>
                    <li>Motoman</li>
                    <li>Panasonic</li>
                </ul>
            </div>
            <div className="weld2">
                <h2>Applications</h2>
                <ul>
                    <li>Vision</li>
                    <li>DCS</li>
                    <li>MH</li>
                </ul>
                </div>
                </div>
        </div>
    )
}

export default robot
