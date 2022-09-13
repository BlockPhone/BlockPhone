import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContainerProjects = styled.div`
max-width: 900px;
margin: 0 auto;
padding-top: 50px;

@media (max-width: 768px) {
    padding-top: 10px;
}
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 30px;
    
    span {
        font-size: 40px;
        background: linear-gradient(135deg, #d6ff7f 0%, #00b3cc 100%);
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
    }
`;

export const ContentProject = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);

@media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 468px) {
    grid-template-columns: repeat(1, 1fr);
}
`;

export const ProjectContent = styled.div`
padding: 0 10px;
`;

export const TitleProject = styled.h3`
padding: 8px 15px;
font-weight: 700;
font-size: 25px;
text-align: center;
margin-bottom: 10px;
color: ${colors.TEXT_WHITE};
background: linear-gradient(135deg, rgb(102, 153, 255) 0%,
rgb(255, 51, 102) 100%);
box-shadow: ${colors.BOX_SHADOW_BLUE};
text-decoration: none;
`;

export const ContainerImage = styled.div`
text-align: center;

img {
    width: 100%;
    box-shadow: ${colors.BOX_SHADOW_BLUE};
    border-radius: 5px;
}

@media (max-width: 768px) {
    img {
        max-width: 250px;
    }
}
`;

export const Description = styled.div`
margin-top: 0;
`;