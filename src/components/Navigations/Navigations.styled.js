import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
display: flex;
padding-top: 20px;
padding-bottom: 20px;
border-bottom: 2px solid black;
justify-content: center;
gap: 300px;
background-color: whitesmoke;
`
export const Link = styled(NavLink)`
color: black;
font-size: 22px;
border: 1px solid black;
border-radius: 8px;
padding: 8px;
background-color: white;
font-weight: 500;

&.active {
    color: white;
    background-color: black;
}
`