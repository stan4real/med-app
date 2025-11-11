import styled from "styled-components";

export const Page = styled.main`
    box-sizing: border-box;
    margin-top: 80px;
    min-height: calc(100vh - 80px);
    height: 100%;
    /* width: 100vw; */
    padding: 80px 197px;

    @media (max-width:690px){
        padding: 40px 10px;
    }
`