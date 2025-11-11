import styled from "styled-components";

export const CardsContainer = styled.div`
    margin-top: 96px;
    display: flex;
    gap:30px;
    flex-wrap: wrap;

    @media (max-width:690px){
        margin-top: 30px;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        .card:nth-child(1) {
            order: 2; 
        }

        .card:nth-child(2) {
            order: 0; 
        }

        .card:nth-child(3) {
            order: 1; 
        }
    }
`

