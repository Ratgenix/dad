import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper,
SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarE'

import {SidebarData} from './SidebarData'
import SubMenu from './SubMenu';
const Sidebar = ({isOpen, toggle}) => {
    //const {currentUser} =useAuth();
    //const mUser=currentUser;

    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    
                <SidebarLink to='/' onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to='/training' onClick={toggle}>
                        Training
                    </SidebarLink>
                    <SidebarLink to='/experience' onClick={toggle}>
                        Experience
                    </SidebarLink>
                    <SidebarLink to='/contact' onClick={toggle}>
                        Contact
                    </SidebarLink>

                    {SidebarData.map((item,index)=>{
                        return <SubMenu item={item} key={index} isOpen={isOpen} toggle={toggle}/>;
                    })
                    }

                    </SidebarMenu>

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
