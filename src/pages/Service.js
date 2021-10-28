import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import ContactBox from '../components/ContactBox'
import './pages.css'

const Servie = () => {

    const [robo, setRobo]=useState(true)
    const [weld, setWeld]=useState(false)
    const [cont, setCont]=useState(false)
    const [start, setStart]=useState(false)

    function hideRobo(){
        setRobo(!robo)
    }
    function hideWeld(){
        setWeld(!weld)
    }
    function hideCont(){
        setCont(!cont)
    }
    function hideStart(){
        setStart(!start)
    }

    function Robot(){
        return (
            <div className='services-main'>
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
    function Weld() {
        return (
            <div className='services-main'>

                <p>One of Carden Robotics' area of expertice is in robot programming.
                    The Carden Robotics team has worked on various projects such as [blah and blah] in this field.
                </p>
    
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
    function Controls() {
        return (
            <div className="services-main">

                <p>One of Carden Robotics' area of expertice is in robot programming.
                    The Carden Robotics team has worked on various projects both implementing and
                    troubleshooting control designs.
                </p>
                <h2>Implementation and Troubleshooting in collaboration with</h2>
                <div className="services-list">
                <ul>
                    <li>Allen Bradley</li>
                    <li>Siemens</li>
                </ul>
                </div>
            </div>
        )
    }
    function Start(){
        return (
            <div className='services-main'>

                <p>Carden Robotics' talented team has performed start-up and debugging to find the root cause of
                    many problems.
                </p>
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
    

    return (
        <div className='services'>
                                        <div className='c-box-body'>
            <ContactBox/></div>
            <h1>Services</h1>
            <p>Carden Robotics' incredibly talented team of engineers, welders and more excel in many areas such as:
                robotics programming, welding, designing controllers and debugging!</p>
                <p>Check-out Carden Robotics' array of talents!</p>
            <hr/>

            <div className='services-sub'><span><h2>Robot Programming</h2><Button onClick={hideRobo}>+</Button> </span>
            {robo && <Robot/>}
            </div>
            <hr/>
            <br/>
            <div><span><h2>Weld Support</h2><Button onClick={hideWeld}>+</Button> </span>
            {weld && <Weld/>}
            </div>
            <hr/>
            <div><span><h2>Controls Design</h2><Button onClick={hideCont}>+</Button> </span>
            {cont && <Controls/>}
            </div>
            <hr/>
            <div><span><h2>Start-Up & Debug</h2><Button onClick={hideStart}>+</Button> </span>
            {start && <Start/>}
            </div>
        </div>
    )
}

export default Servie
