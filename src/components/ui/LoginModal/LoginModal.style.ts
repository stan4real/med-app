import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 328px;
  text-align: center;

  h2{
    margin: 0px 0px 10px 0px;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: all 150ms ease-in;
  &:focus{
    border: 1px solid #FF685B;
  }
`;

export const ButtonsContainer = styled.div`
 width: 100%;
 margin-top: 10px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 & button{
    min-height: 40px;
    height: 40px;
    text-align: center;
    padding: 10px 20px;
 }
`

export const Error = styled.div`
  color: red;
  margin: 0px 0px 10px 0px;
`;