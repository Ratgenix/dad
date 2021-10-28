import React from 'react'
import logo from './logo2.png'
import './components.css'
import { FaFacebookF } from "react-icons/fa";
import Search from '../components/Search.js'
import SearchData from './SearchData.json'
function Header() {
    return (
        <div className ="header">
            <div className="empty-orange"></div>
            <div className='address-phone'>
                <span>
                <div className='add'><a href='https://goo.gl/maps/V8yTMw5nVwuSu9yZ8'>52050 Van Dyke, Shelby Township, Michigan 48316</a></div>
                <div className='phone'><a href='tel:+5862624219'>586.262.4219</a> Office  |  <a href='tel:855.811.3891'>855.811.3891</a> 24 Hour Service
                </div>
                </span>
            </div>
            <div className='row-2'>
                <span>
            <div className="logo-head">
                <a href='/'><img src={logo}></img>
                </a>
            </div>
            
            <div className='facebook'>
            
                <a href="https://www.facebook.com/cardenrobotics/"><FaFacebookF></FaFacebookF></a>
            </div>
            <Search placeholder='Search...' data={SearchData} className="search"/>
            </span>
            </div>

        </div>
    )
}

export default Header
