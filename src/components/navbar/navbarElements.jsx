import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from "react-scroll";
export const Nav= styled.nav`
max-width:100%;
min-height:60px;
background:var(--white-color); 
color:var(--text-color);
position:sticky;
z-index:10;
top:0;
font-size:1.2rem;
`;
export const NavBarContainer=styled.section`
width:80%;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
min-height:60px;
max-width:80%;
margin:0 auto;
padding: 5px 16px;
@media screen and (width< 992px){width:95%;max-width:95%;}
`;
export const NavLogo=styled(LinkR)`
color:var(--secondary-color);
font-size:2rem;
justify-self:flex-start;
display:flex;
justify-content:center;
align-items:center;
text-decoration:none;
cursor:pointer;
font-weight:bold;
`;
export const MobileIcon=styled.div`
display:none;
@media screen and (max-width:992px){
    display:block;
    color:var(--secondary-color);
    cursor:pointer;
    font-size:1.2rem;
    color:var(--secondary-color);
    height: 60px;
    display: flex;
    justify-content:center;
    align-items:center;
}
`;
export const NavMenu=styled.ul`
display:flex;
justify-content: space-around;
align-items:center;
list-style:none;
@media screen and (max-width:992px){display:none;}
`;
export const NavItem=styled.li`
height: 0px;
padding:0px 16px;
display: flex;
align-items: center;
`;
export const NavLinks=styled(LinkS)`
color:var(--text-color);
display:flex;
justify-content: center;
align-items:center;
height: 100%;
`