import { IlustrationContainer, ImagesIlustration, TentImage } from "./styles";
import Tenda1 from '../../../assets/Tendas-ilustration/tenda4.jpg';
import Tenda2 from '../../../assets/Tendas-ilustration/tenda4.jpg';
import Tenda3 from '../../../assets/Tendas-ilustration/tenda4.jpg';

export function Ilustration() {
    return (
        <IlustrationContainer>
            <h1>Tendas para casamentos, aniversários, confraternizações e eventos em geral</h1>
            <ImagesIlustration>
                <TentImage src={Tenda1} alt="Imagem de tenda" />
                <TentImage src={Tenda2} alt="Imagem de tenda" />
                <TentImage src={Tenda3} alt="Imagem de tenda" />
            </ImagesIlustration>
        </IlustrationContainer>
    )
}