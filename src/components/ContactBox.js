import React from 'react'
import './components.css'
import { MdEmail } from "react-icons/md";
const ContactBox = () => {
    return (
        <div className='c-box'>
            <h2>Contact Us</h2>
            <p><b>Carden Robotics Inc.</b></p>
            <p>52050 Van Dyke Avenue</p>
            <p>Shelby Township, MI 48316</p>
            <br/>
            <p>(586) 262 - 4219 Office</p>
            <p>(586) 262 - 4238 Fax</p>
            <p>(855) 811 - 3891 24 Hr Svc</p>
            <br/>
            <div className='email-wIco'><p><a href='contact'><b><MdEmail className='email-ico'/> Email Carden Robotics</b></a></p>
            </div>
        </div>
    )
}

export default ContactBox
