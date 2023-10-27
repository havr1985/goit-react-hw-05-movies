import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ListNav = styled.nav`
display: flex;
gap: 40px;
margin-top: 20px;
`
export const Link = styled(NavLink)`
color: tomato;
border: 1px solid tomato;
background-color: transparent;
padding: 5px;
border-radius: 8px;
font-weight: 700;

&.active{
    color: lightgray;
    background-color: tomato;
}
`