import React from 'react'
import logo from './logo2.png'
import './components.css'

function Footer() {
    return (        
    <div className = "footer">
    <div className="columns">
        
    <div className="column-1">
        <h3>About</h3>
        <ul className="col1">     
        <li><a href='/'>Privacy Policy</a></li>
        <li><a href='/'>Terms of Service</a></li>
        <li><a href='/'>About Us</a></li>
        </ul>
        </div>
    
    <div className="column-4">
    <img src={logo}></img>
        <ul className="col4">
        <li><a href='https://goo.gl/maps/V8yTMw5nVwuSu9yZ8'>52050 Van Dyke, Shelby Township, Michigan 48316</a></li>
        <li><a href='tel:+5862624219'>586.262.4219</a> - Office</li>
        <li><a href='tel:855.811.3891'>855.811.3891</a> - 24 Hour Service</li>


        </ul>
    </div>
    </div>

    <div className="copyright-info">
                    <hr/>
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Carden Robotics Inc. | All rights reserved
                    </p>
                    </div>

</div>
    )
}

export default Footer
