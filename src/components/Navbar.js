import React from 'react'
import './components.css'
import './nav.css';
import {NavDropdown} from 'react-bootstrap';
import {FiAlignRight,FiXCircle,FiChevronDown} from "react-icons/fi";
import { Nav, NavLink, Bars, NavMenu,  NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = ({toggle}) => {

    


    return (

        <div className="nav">
                    <>
                    

                   <Bars onClick={toggle}/>
<Nav >

    <NavMenu className="NavbarMen">

<NavLink to='/'>{<h2>Home</h2>}</NavLink>
&nbsp;&nbsp;
<NavDropdown  title={<h2>Services</h2>} id="basic-nav-dropdown">
<NavDropdown.Item href="/services">All Services</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="/robot">Robot Programming</NavDropdown.Item>
{/*<NavDropdown.Divider />*/}
<NavDropdown.Item href="/weld">Weld Support</NavDropdown.Item>
<NavDropdown.Item href="/controls">Controls Design</NavDropdown.Item>
<NavDropdown.Item href="/start-up">Start-Up & Debug</NavDropdown.Item>

</NavDropdown>
&nbsp;&nbsp;
<NavLink to='/experience' >{<h2>Experience</h2>}</NavLink>

{/*<NavLink to='/employment'>{<h2>Employment</h2>}</NavLink>*/}

<NavLink to='/training'>{<h2>Training</h2>}</NavLink>

<NavLink to='/contact'>{<h2>Contact</h2>}</NavLink>

    </NavMenu>



</Nav>



</>
        </div>
    )
}

export default Navbar
