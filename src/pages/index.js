import React from 'react'
import './pages.css'
import ContactBox from '../components/ContactBox'

function index() {
    return (
        
        <div className="home-1">
                <div className='c-box-body'>
            <ContactBox/></div>
            <div className="home-body">
                
                <h1>Welcome to Carden Robotics & Automation</h1>
                <p>Carden Robotics Inc. is a company that was established in 2004 to program robotics systems within the automotive industry.</p>
                <p>We have worked in most of every automotive plant in the United States, Canada, Mexico and Brazil.</p>
                <p>The principles of our business have remained steadfast through the years – fast and safe programing of even the most difficult production systems while following on all safety and company guidelines and standards.</p>
                <p>Trust us to program your systems, you’ll know that your systems are in the hands of skilled, qualified professionals.</p>
            </div>
            
        </div>
    )
}

export default index
