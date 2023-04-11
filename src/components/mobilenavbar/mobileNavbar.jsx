import React from 'react';
import {SideBarContainer,SidebarLink,CloseIcon,Icon,SideBarMenu}from "./mobilemenuelements";
const Mobilemenu =({isOpen,toggle})=> {
    return ( 
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon><CloseIcon /></Icon>
            <SideBarMenu>
                        <SidebarLink to="/">Home</SidebarLink>
                        <SidebarLink to="/">about Me</SidebarLink>
                        <SidebarLink to="/">services</SidebarLink>
                        <SidebarLink to="/">projects</SidebarLink>
                        <SidebarLink to="/">FeedBacks</SidebarLink>
                        <SidebarLink to="/">Plans</SidebarLink>
                        <SidebarLink to="/">Blog</SidebarLink>
            </SideBarMenu>
        </SideBarContainer>
     );
}

export default Mobilemenu ;