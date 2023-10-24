import styled from "styled-components";

export const Item = styled.li`
width: 200px;
border: 1px solid black;
border-radius: 8px;
background-color: white;
&:hover{
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}
`
export const List = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
margin-top: 30px;
`