import styled from "styled-components";

export const Header = styled.header`
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    height: 80px;
    width:100%;
    padding: 0px 70px;
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px #000;
    align-items: center;
    
    @media(max-width: 520px){
        padding: 30px 8px;
    }
    

`
export const Logo = styled.span`
 font-size: 24px;
 font-weight: 800;
 margin-top: 1px;
`

export const Nav = styled.nav`
 display: flex;
 gap: 57px;
 justify-content: center;
 align-items: center;

 

 & a {
    font-family: "Open Sans", sans-serif;
    text-decoration: none;
    font-size: 15px;
    margin-top: 1px;
    margin-right: 2px;
    font-weight: 600;
    color: #737373;
    letter-spacing: 0.3px;
 }
 & button {
    height: 40px;
    width: 186px;
    border-radius: 7px;
    border:2px solid #FF685B;
    text-align: center;
    color: #FF685B;
    font-size:21px;
    font-weight: 500;
    background-color: #fff;
    letter-spacing: 1px;
 }

 @media(max-width: 690px){
        gap: 8px;
        & button {
            max-width: 106px;
            height: 36px;
            margin-right: 2px;
        }
    }
`