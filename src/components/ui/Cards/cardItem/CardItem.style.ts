import styled from "styled-components";

export const Card = styled.div<{order:number}>`
    box-sizing: border-box;
    width: 328px;
    padding: 35px 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    box-shadow: 0px 13px 19px 0px #00000011;
    order: ${(props) => props.order};

    @media (max-width: 520px) {
    &:nth-child(1) {
      order: 1; 
    }

    &:nth-child(2) {
      order: 2; 
    }

    &:nth-child(3) {
      order: 0; 
    }
}
    
`
export const Icon = styled.div`
    position: relative;
    width:72px;
    height: 72px;
    border-radius: 50%;
    background-color: #E74040;
    & img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform:translate(-50%, -50%);
        size:32px;
    }
`
export const Title = styled.h5`
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.1px;
    margin: 0;
`

export const Desc = styled.p`
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.2px;
`
export const Line = styled.span`
    height: 2px;
    width: 50px;
    background-color: #E74040;
`