import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 35px;

    @media (max-width:690px){
        gap: 45px;
    }
`

export const Buttons = styled.div`
    display: flex;
    gap: 10px;
`
