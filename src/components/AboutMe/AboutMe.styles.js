import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContainerAboutMe = styled.div``;

export const ContainerFlex = styled.div`
display: flex;
align-items: center;
justify-content: center;
max-width: 900px;
margin: 0 auto;

@media (max-width: 768px) {
display: block;
padding: 0px 30px;
}
`;

export const ContainerText = styled.div`
    padding: 0px 30px;

@media (max-width: 768px) {
padding: 0;
    }
`;

export const Title = styled.h1`
    margin: 0;
    padding: 20px 0;

    p {
        margin: 0;
    }

    p:nth-child(2) {
        font-size: 55px;
        background: ${colors.TEXT_GRADIENT_PURPLE};
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
    }

    @media (max-width: 768px) {
        padding: 0;
        text-align: center;

        p:nth-child(2) {
          font-size: 2rem;
        }
    }
`;

export const DescriptionText = styled.div`
  font-size: 16px;
  color: ${colors.TEXT_GREY_NEUTRAL};
  padding-right: 100px;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

export const ContainerIcons = styled.div`
display: flex;

img {
    width: 32px;
    height: 32px;
    margin: 10px;
}

@media (max-width: 768px) {
    justify-content: center;
}
`;

export const ContainerImage = styled.div`
text-align: center;
max-width: 250px;

@media (max-width: 768px) {
width: 250px;
padding: 10px 0;
margin: 0 auto;

img {
  width: 250px;
  border-radius: 50%;
   }

   @media (max-width: 768px) {
    width: 100%;
    padding: 10px 0;
    margin: 0 auto;

    img {
      
    }
   }
  }
`;

