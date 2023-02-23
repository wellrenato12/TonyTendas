import { ContactContainer } from "./styles";

export function Contact() {
    return (
        <ContactContainer>
            <strong>Informações de contato</strong>
            <p>TonyTendas</p>
            <p>
                WhatsApp:
                <a href="#"> +55 &#40;19&#41; 3232-3232</a>
            </p>
            <p>
                E-mail: 
                <a href="#"> tonytendas@email.com</a>
            </p>
            {/* <InfosContact>
                
            </InfosContact> */}
        </ContactContainer>
    )
}