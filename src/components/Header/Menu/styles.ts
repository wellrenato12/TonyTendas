import styled from "styled-components";

export const MenuContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;
    margin: auto;
    max-width: 1376px;
    background-color: ${props => props.theme.white};
    height: 120px;
    border-radius: 12px;
`

export const Logo = styled.img`
    width: 190px;
`

export const MenuItems = styled.div`
    ul {
        display: flex;
        gap: 2rem;

        li {
            a {
                transition: all 0.5s;

                &:hover {
                    color: ${props => props.theme.black};
                    font-size: 1.05rem;
                    transition: all 0.5s;
                }
            }
        }
    }
`