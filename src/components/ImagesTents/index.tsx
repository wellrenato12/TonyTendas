import { ImagesTentsContainer, PicturesOfTents } from "./styles";
import TentImage from '../../assets/Tendas-ilustration/tenda4.jpg'

export function ImagesTents() {
    return (
        <ImagesTentsContainer>
            <h1>Montagem em Campinas e região</h1>
            <PicturesOfTents>
                <img src={TentImage} alt="Tent" />
                <img src={TentImage} alt="Tent" />
                <img src={TentImage} alt="Tent" />
                <img src={TentImage} alt="Tent" />
                <img src={TentImage} alt="Tent" />
                <img src={TentImage} alt="Tent" />
                <img src={TentImage} alt="Tent" />
                <img src={TentImage} alt="Tent" />
                <img src={TentImage} alt="Tent" />
                <img src={TentImage} alt="Tent" />
                <img src={TentImage} alt="Tent" />
                <img src={TentImage} alt="Tent" />
            </PicturesOfTents>
        </ImagesTentsContainer>
    )
}