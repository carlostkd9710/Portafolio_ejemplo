import React from "react";
import '../styles/About.css';
import {AboutAvatar,AboutH2,AboutImg,AboutLocation, AboutName, AboutProfession, AboutStyle} from '../styleds/AboutStyled'

export const About = () => {
    return (
        <AboutStyle className="About">
        <div className="About-container">
            <AboutAvatar className="About-avatar">
                <figure>
                    <AboutImg src="https://res.cloudinary.com/dvh5dsa7s/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1636554742/Fotos/Alw9Mzc9pTmdXAwOHRl5gLxuUKcotcP3Zn1WBWQ3SVOP_jmh3u0.jpg" alt="Mi Avatar"/>
                </figure>
            </AboutAvatar>
            <AboutName className="About-name">
                <AboutH2>Carlos Arturo Torres Serrano</AboutH2>
            </AboutName>
            <AboutProfession className="About-profession">
                <p>Ingeniero de Telecomunicaciones</p>
            </AboutProfession>
                <AboutLocation className="About-description">
                   <p>Bogotá, Colombia</p>
                </AboutLocation>
                <div className="About-social">
                     Redes sociales
                </div>
                </div>
            </AboutStyle>
    )
}
