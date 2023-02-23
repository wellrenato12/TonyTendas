import { CardService, DescriptionService, ServicesContainer, TypesOfService } from "./styles";
import { GiBarracksTent } from 'react-icons/gi';

export function Services() {
    return (
        <ServicesContainer>
            <TypesOfService>
                <CardService>
                    <span>
                        <GiBarracksTent size={30} />
                    </span>
                    <strong>Montagem de tenda</strong>
                    <p>Locação de tendas de vários tamanhos.</p>
                    <a href="#">Faça seu orçamento</a>
                </CardService> 
                <CardService>
                    <span>
                        <GiBarracksTent size={30} />
                    </span>
                    <strong>Gradil para eventos</strong>
                    <p>Locação de gradil para delimitar ou cercar um local.</p>
                    <a href="#">Faça já seu orçamento</a>
                </CardService> 
                <CardService>
                    <span>
                        <GiBarracksTent size={30} />
                    </span>
                    <strong>Palco para eventos</strong>
                    <p>Locação de palco para apresentações ou cerimônias.</p>
                    <a href="#">Faça já seu orçamento</a>
                </CardService>
            </TypesOfService>
            {/* <DescriptionService>
                <strong>Tendas:</strong>
                <p>Temos tendas de vários tamanhos para seu evento.</p>
                <p>10x10, 8x8, 6x6</p>
                <p>Podem ser preenchidas respectivamente com:</p>
                <ul>
                    <li>32 mesas e 128 cadeiras;</li>
                    <li>20 mesas e 80 cadeiras;</li>
                    <li>12 mesas e 48 cadeiras;</li>
                </ul>
            </DescriptionService> */}
        </ServicesContainer>
    )
}