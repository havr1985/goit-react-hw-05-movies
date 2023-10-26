import styled from "styled-components";

export const List = styled.ul`
display: flex;
flex-direction: column;
gap: 20px;
margin-top: 20px;
padding-bottom: 20px;
`
export const Item = styled.li`
display: flex;
flex-direction: column;
gap: 10px;
border: 1px solid black;
border-radius: 8px;
padding: 5px;
`
export const ErrMsg = styled.div`
margin-top: 20px;
color: red;
font-weight: 700;
`