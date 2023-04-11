import React,{useState} from 'react';
import {Nav,NavBarContainer,NavLogo,NavMenu,NavItem,NavLinks,MobileIcon} from "./navbarElements";
import{FaBars} from "react-icons/fa";
const Navbar=({toggle})=> {
    return ( 
        <Nav>
            <NavBarContainer>
                <NavLogo to="/">Mehdi Hajati</NavLogo>
                <MobileIcon onClick={toggle}><FaBars /></MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="/">Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/">about Me</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/">services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/">services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/">projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/">FeedBacks</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/">Plans</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/">Blog</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavBarContainer>
        </Nav>
     );
}
export default Navbar;