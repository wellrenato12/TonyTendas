import styled from "styled-components";

export const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5rem auto;
    max-width: 1376px;

    h1 {
        text-align: center;
        margin-top: 4rem;
    }
`

export const TypesOfService = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
`

export const CardService = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    position: relative;
    border: 1px solid black;
    border-radius: 8px;
    text-align: center; 
    width: 300px;
    height: auto;
    padding: 1rem;

    span {
        background-color: ${props => props.theme["orange-300"]};
        padding: .5rem .75rem;
        border-radius: 50%;
        position: absolute;
        top: -27px;
        right: 50%;
        transform: translateX(50%);
    }

    strong {
        margin-top: 1.5rem;
    }

    a {
        color: ${props => props.theme["orange-500"]};
        transition: all .5s;

        &:hover {
            color: ${props => props.theme["orange-900"]};
            transition: all .5s;
        }
    }
`

export const DescriptionService = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0;
`