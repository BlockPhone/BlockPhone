import React, { useState} from "react"
import * as S from "./Navbar.styles";

const Navbar = () => {
const [showMenuBurguer, setShowMenuBurguer] = useState(false)

  return (
  <S.ContainerNavbar>
    <S.ContainerLogo> 
      <S.ImageLogo src="/img/logo.png" alt="Logo Blockphone" />
      <div> 
        <h1>BlockPhone</h1>
        <h2>Bienvenido.</h2>
      </div>
      </S.ContainerLogo>

         <S.ContainerBurguer onClick={() => setShowMenuBurguer(!showMenuBurguer)}>
            <S.BurguerMenu />
            <S.BurguerMenu />
            <S.BurguerMenu />
         </S.ContainerBurguer>

      <S.ContainerItems showMenuBurguer={showMenuBurguer}>
        <p>Sobre Nosotros</p>
        <p>Proyectos</p>
        <S.Button>📞Contactanos</S.Button>
      </S.ContainerItems>
   </S.ContainerNavbar>
  );
};

export default Navbar;