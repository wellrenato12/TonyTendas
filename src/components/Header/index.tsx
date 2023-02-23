import { Ilustration } from "./Ilustration";
import { Menu } from "./Menu";
import { HeaderContainer } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <Menu />
            <Ilustration />
        </HeaderContainer>
    )
}