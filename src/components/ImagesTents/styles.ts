import styled from "styled-components";

export const ImagesTentsContainer = styled.div`
    max-width: 1376px;
    margin: auto;

    h1 {
        text-align: center;
    }
`

export const PicturesOfTents = styled.div`
    margin: 5rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: 2rem;

    img {
        width: 300px;
        border-radius: 8px;
    }
`