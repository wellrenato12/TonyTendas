import styled from "styled-components";

export const IlustrationContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    gap: 4rem;
    max-width: 1376px;

    h1 {
        text-align: center;
        margin-top: 1rem;
    }
`

export const ImagesIlustration = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

export const TentImage = styled.img`
    border-radius: 8px;
    width: 400px;
    height: 250px;
    outline: 2px solid ${props => props.theme.white};
    box-shadow: 0 0 2rem ${props => props.theme["gray-100"]};
`