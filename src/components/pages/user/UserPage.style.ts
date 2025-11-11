import styled from "styled-components";

export const Heading = styled.h1`
    margin-top: 60px;
    
    @media(max-width: 690px){
        margin-top: 20px;
    }
`
export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 27px;
`

export const Buttons = styled.div`
    display: flex;
    gap: 10px;
    & button {
        letter-spacing: 0.6px;
    }
`
