import { Logo, MenuContainer, MenuItems } from "./styles";
import imageLogo from '../../../assets/tony-tendas.jpg'

export function Menu() {
    return (
        <MenuContainer>
            <Logo src={imageLogo} />
            <MenuItems>
                <ul>
                    <li>
                        <a href="#">Início</a>
                    </li>
                    <li>
                        <a href="#">Serviços</a>
                    </li>
                    <li>
                        <a href="#">Tendas</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                </ul>
            </MenuItems>
        </MenuContainer>
    )
}