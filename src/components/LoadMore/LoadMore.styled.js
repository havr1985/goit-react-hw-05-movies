import styled from "styled-components";

export const BtnWrap = styled.div`
display: block;
text-align: center;
margin-top: 20px;
margin-bottom: 20px;
`
export const Btn = styled.button`
border: 0;
border: 1px solid black;
border-radius: 8px;
padding: 8px 16px;
border-radius: 2px;
background-color: white;
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
text-align: center;
font-size: 18px;
line-height: 24px;
font-style: normal;
font-weight: 500;
min-width: 180px;

&:hover{
    background-color: black;
    color: white;
}
`