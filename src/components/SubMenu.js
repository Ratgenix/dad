import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { SidebarLink } from './SidebarE'

const SidebarLabel=styled.span`


`
const DropdownLink=styled(Link)`
color:white;
`

const SubMenu = ({item, toggle, isOpen}) => {
    const [subnav, setSubNav]=useState(false)
    const showSub=()=>setSubNav(!subnav)
    return (
        <>
        <SidebarLink to={item.path} onClick={item.subNav&&showSub}>
            <div>
                {item.item}
                <SidebarLabel>{item.title}</SidebarLabel>
            </div>
            <div>
                {item.subNav && subnav 
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                :null}
            </div>
        </SidebarLink>
        {subnav&&item.subNav.map((item,index)=>{
            return(
                <DropdownLink to={item.path} key={index} onClick={toggle}>
                {item.icon}
               
                <SidebarLabel onClick={toggle}>{item.title}
                {console.log(isOpen)}</SidebarLabel>
                </DropdownLink>
            
            )}
        )}
        </>
    )
}

export default SubMenu
