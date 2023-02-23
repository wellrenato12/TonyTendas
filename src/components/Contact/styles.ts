import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;

    margin: 5rem auto 0;
    padding: 2rem;

    background-color: ${props => props.theme.black};
    color: ${props => props.theme.white};

    strong {
        font-size: 1.5rem;
    }

    p:nth-child(2) {
        font-size: 1.25rem;
    }

    a {
        color: ${props => props.theme.white};
        transition: all .5s;

        &:hover {
            color: ${props => props.theme["orange-500"]};
            transition: all .5s;
        }
    }
`