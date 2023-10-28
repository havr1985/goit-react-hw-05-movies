import styled from "styled-components";
import { Link } from "react-router-dom";

export const ErrWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
gap: 10px;
`
export const Title = styled.h1`
font-size: 200px;
`
export const Text = styled.p`
font-size: 100px;
`
export const LinkHome = styled(Link)`
font-size: 50px;
color: tomato;
`