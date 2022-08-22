import React from "react";
import * as S from './AboutMe.styles';
import logoFacebook from '../../svg/logoFB.svg';
import logoInstagram from '../../svg/logoIG.svg';
import logoWhatsapp from '../../svg/logoWA.svg';



const AboutMe = () => {
    const socialNetworks = [
        {
            name: "Facebook",
            link: "https://www.facebook.com/BlockPhoner",
            logo: logoFacebook
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/blockphone_romita/",
            logo: logoInstagram
        },
        {
            name: "Whatsapp",
            link: "https://www.whatsapp.com/?lang=es",
            logo: logoWhatsapp
        }
    ]
     return (
     <S.ContainerAboutMe>
       <S.ContainerFlex>
         <S.ContainerText>
           <S.Title>
             <p>👁‍🗨 Hello, I'm</p>
             <p>BlockPhone</p>
             <p>Bienvenido</p>
           </S.Title>
           <S.DescriptionText>
             lorem ipsum lorem ipsum lorem ipsum lorem ipsum
             lorem ipsum lorem ipsum lorem ipsum lorem ipsum
             lorem ipsum lorem ipsum lorem ipsum lorem ipsum
           </S.DescriptionText>
          <S.ContainerIcons>
            {socialNetworks.map((network, index) => (
               <a key={index} href={network.link} target="_blank" rel="noreferrer">
                   <img src={network.logo} alt={network.name} />
               </a>
            ))};
          </S.ContainerIcons>
         </S.ContainerText>
         <S.ContainerImage>
            <img src="/img/logo.png" alt="BlockPhone Romita" />
         </S.ContainerImage>
       </S.ContainerFlex>
     </S.ContainerAboutMe>
   );
};

export default AboutMe;