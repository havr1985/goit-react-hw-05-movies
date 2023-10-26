import styled from "styled-components";

export const List = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 10px;
margin-top: 20px;
padding-bottom: 20px;
`
export const Item = styled.li`
width: 200px;
border: 1px solid black;
border-radius: 8px;
`
export const Img = styled.img`
height: 300px;
border-top-left-radius: 8px;
border-top-right-radius: 8px;
`
export const TextWrap = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
align-items: start;
padding: 5px;
`
export const Text = styled.span`
font-weight: 700;
`