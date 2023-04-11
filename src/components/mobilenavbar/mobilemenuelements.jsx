import React from 'react';
import styled from "styled-components";
import{FaTimes} from "react-icons/fa";
import {Link as LinkS} from "react-scroll";
export const SideBarContainer=styled.div`
position: fixed;
z-index:10;
width: 100%;
height: 100%;
background:var(--white-color);
top: 0;
left: ${({isOpen})=>(isOpen ? '0' : '-100%')};
transition: all 0.3s linear 0.05s;
opacity: 1;
display:grid;
align-items: start;
@media screen and (width>992px){display:none;}
`;
export const CloseIcon=styled(FaTimes)`
color: var(--secondary-color);
font-size:1rem;
`;
export const Icon=styled.div`
position: absolute;
top: 20px;
right: 20px;
background: transparent;
cursor: pointer;
outline:none;
`;
export const SideBarMenu=styled.ul`
height: 100%;
display:flex;flex-direction: column;
justify-content: start;
align-items: start;
margin-top: 4rem;
margin-left: 1rem;
list-style-type: none;
`;
export const SidebarLink=styled.li`
font-size:1.8rem;
`;