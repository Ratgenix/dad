import React from 'react'
import './pages.css'
import ContactBox from '../components/ContactBox'

function training() {
    return (
        <>
        <div className='c-box-body'>
        <ContactBox/></div>
        <div className="services-main">
            <h1>Training</h1>
            <hr/>
            <p>Carden Robotics has been trained in many areas to help improve what the company can do, safely and effectively.
                Listed below are some of the training courses that Carden has been trained for.
            </p>
            <hr/>
            <div className='services-list'>
            <ul>
                <li>Fanauc Training at M Tech</li>
                <li>ABB Training</li>
                <li>GM Certified</li>
            </ul>
            </div>
            <br/>
            <br/>
        </div>
        </>
    )
}

export default training
