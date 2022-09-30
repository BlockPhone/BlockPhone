import React, {useRef, useState} from 'react'
import * as S from "./Contact.styles";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [contactDates, setContactDates] = useState({
    name: "",
    email: "",
    message: "",
    checkedTerms: false,
  });
  const [emptyInputs, setEmptyInputs] = useState(false);
  const [successSendForm, setSuccessSendForm] = useState(false); 
  const [errorSendForm, setErrorSendForm] = useState(false);
  const form = useRef();
  
  const onSubmit = (e) => {

    //evitar recargo de pagina
    e.preventDefault();

    //validar formulario
    if(
    contactDates.name === "" || 
    contactDates.email === "" || 
    contactDates.message === "" || 
    contactDates.checkedTerms === false
    ) {
      setEmptyInputs(true);
    } else {
      emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_USER_ID
        ).then((result) => {
          setSuccessSendForm(true);
        },
        (error) => {
          setErrorSendForm(true);
        }
        );
    }

    //enviar formulario

  };

  return (
  <S.ContainerContact>
    <S.Title>👋 Contactanos</S.Title>
    <S.ContainerForm>
    {successSendForm ? (
      <S.SucessMessage>Enviado correctamente</S.SucessMessage>
    ) : (
        <S.Form onSubmit={onSubmit} ref={form}>
            <S.InputForm placeholder="Nombre" type="text" name="name" 
            onChange={(e) => setContactDates({ ...contactDates, name: e.target.value})}
            value={contactDates.name} 
            />
            <S.InputForm placeholder="Correo" type="email" name="email"
            onChange={(e) => setContactDates({ ...contactDates, email: e.target.value})} 
            value={contactDates.email}
            />
            <S.TextArea placeholder="Escribe tu Mensaje:" name="message"
            onChange={(e) => setContactDates({ ...contactDates, message: e.target.value})} 
            value={contactDates.message}
            />
            <S.ContainerConditions>
                <input type="checkbox" onChange={(e) => setContactDates({ ...contactDates, checkedTerms: e.target.checked})}/>
                <span>Acepta los Terminos & Condiciones</span>
            </S.ContainerConditions>
            <S.Button type="submit">📩 Enviar</S.Button>
        </S.Form>
        )}
        {emptyInputs && (
          <p>Debe completar todos los campos & aceptar los términos</p>
        )}
        {errorSendForm && (
          <S.TextError>Encontramos un ERROR, Intente mas tarde</S.TextError>
        )}
    </S.ContainerForm>
  </S.ContainerContact>
  );
};

export default Contact
