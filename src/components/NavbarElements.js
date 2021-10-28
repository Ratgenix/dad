import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import React, {useState} from 'react'


export const Nav = styled.nav`
background:transparent;
height:80px;
display:flex;

width: 98.5vw;
z-index:999;
justify-content:center; 
align-items:center; 
text-align:center;
@media screen and (max-width:768px){
    display:none;
    width: 10vw;
    
}

`

export const NavLink=styled(Link)`
color:#485d73;
text-shadow:
-1px -1px 0 #fff,  
 1px -1px 0 #fff,
 -1px 1px 0 #fff,
  1px 1px 0 #fff;
display:flex;
align-items:center;
text-decoration:none;
padding:0 1rem;
height:100%;

cursor:pointer;
justify-content:center;
align-items:center;


&:hover{
    color:#f17236;
    padding-bottom:-5px;
    }
`



export const Bars = styled(FaBars)`
display:none;
color:orange;
@media screen and (max-width:768px){
    display:block;
    position:absolute;
    height:17vh;
    right:0;
    transform:translate(-100%, 75%);
    font-size:1.8rem;
    cursor:pointer;
}
`

export const NavMenu=styled.div`
display:flex;
align-items:center;
text-align:center;
justify-content:center;
align-items:center;

align-self: center;
width: 100%;
align-content: center;



@media screen and (max-width:768px){
    display:flex;
}
`

export const NavBtn=styled.nav`
display:flex;
align-items:center;
margin-right:24px;

@media screen and (max-width:768px){
    display:none;
}

`
export const NavBtnLink=styled(Link)`
border-radius:4px;
background:#256ce1;
margin-top:20px;
margin-bottom:16px;
margin-right:20px;
color:#fff;
border:none;
outline:none;
cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;

&:hover{
background:#fff;
color:#010606
}
@media screen and (max-width:768px){
    display:none;
}
`