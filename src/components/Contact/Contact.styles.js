import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContainerContact = styled.div`
padding: 50px 0;

@media (max-width: 768px) {
    padding: 20px 0;
}
`;

export const Title = styled.h2`
text-align: center;
font-size: 30px;
`;

export const ContainerForm = styled.div`
max-width: 600px;
border-radius: 10px;
box-shadow: 0 0 12px rgb(0 0 0 / 16%);
padding: 30px;
margin: 0 auto;
`;

export const Form = styled.form`
box-sizing: border-box;
`;

export const InputForm = styled.input`
padding: 10px;
border-radius: 6px;
border: 2px solid #4c526838;
background-color: transparent;
font-size: 16px;
display: block;
width: 100%;
margin-bottom: 15px;
color: #4c5268;
`;

export const TextArea = styled.textarea`
padding: 10px;
border-radius: 6px;
border: 2px solid #4c526838;
background-color: transparent;
font-size: 16px;
display: block;
width: 100%;
margin-bottom: 15px;
color: #4c5268;
`;

export const Button = styled.button`
color: ${colors.TEXT_WHITE};
box-shadow: ${colors.BOX_SHADOW};
background: linear-gradient(135deg, #6699ff 0%, #ff3366 100%);
padding: 10px 40px;
border-radius: 999px;
border: none;
margin: 15px 0;
font-weight: 700;
cursor: pointer;
width: 150px;
text-transform: uppercase;
`;

export const ContainerConditions = styled.div`
display: flex;
justify-content: start;
align-items: center;

span {
    color: ${colors.TEXT_BLACK};
}
`;

export const TextError = styled.p`
color: red;
font-size: 15px;
`;

export const SucessMessage = styled.p`
color: green;
font-size: 15px;
`;