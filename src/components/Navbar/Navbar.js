import React, { useState} from "react"
import * as S from "./Navbar.styles";

const Navbar = () => {
const [showMenuBurguer, setShowMenuBurguer] = useState(false)

const clickItemNav = item => {
  document.getElementById(item).scrollIntoView({ behavior: "smooth"});
}

  return (
  <S.ContainerNavbar>
    <S.ContainerLogo> 
      <S.ImageLogo src="/img/logo.png" alt="Logo Blockphone" />
      <div> 
        <h1>BlockPhone</h1>
        <h2>Reparaciones y Accesorios.</h2>
      </div>
      </S.ContainerLogo>

         <S.ContainerBurguer onClick={() => setShowMenuBurguer(!showMenuBurguer)}>
            <S.BurguerMenu />
            <S.BurguerMenu />
            <S.BurguerMenu />
         </S.ContainerBurguer>

      <S.ContainerItems showMenuBurguer={showMenuBurguer }>
        <p onClick={() => clickItemNav("about-me")}>Sobre Nosotros</p>
        <p onClick={() => clickItemNav("projects")}>Servicios</p>
        <S.Button onClick={() => clickItemNav("contact")}>- 📞Contactanos -</S.Button>
      </S.ContainerItems>
   </S.ContainerNavbar>
  );
};

export default Navbar;