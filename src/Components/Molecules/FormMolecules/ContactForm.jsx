import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
    consent: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.consent) {
      toast.warn("⚠️ Você deve aceitar a política de privacidade.");
      return;
    }

    setIsLoading(true);

    const templateParams = {
      from_name: `${formData.name} ${formData.surname}`,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_PUBLIC_KEY // Corretto: Usa USER_ID invece della public key
    )
      .then(() => {
        toast.success("✅ Mensagem enviada com sucesso!");
        setFormData({ name: "", surname: "", email: "", message: "", consent: false });
      })
      .catch((error) => {
        console.error("Erro ao enviar:", error);
        toast.error("❌ Erro ao enviar a mensagem. Tente novamente.");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <FormWrapper>
      <ToastContainer position="top-right" autoClose={3000} />
      <FormTitle>CONTACTE-NOS</FormTitle>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Nome" value={formData.name} onChange={handleChange} required />
        <Input type="text" name="surname" placeholder="Apelido" value={formData.surname} onChange={handleChange} required />
        <Input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
        <Textarea name="message" placeholder="Mensagem" rows="5" value={formData.message} onChange={handleChange} required />
        <CheckboxContainer>
          <Checkbox type="checkbox" name="consent" id="consent" checked={formData.consent} onChange={handleChange} required />
          <Label htmlFor="consent">
            Eu declaro que li as informações de acordo com o artigo 13 e consinto com o processamento dos meus dados pessoais.
          </Label>
        </CheckboxContainer>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Enviando..." : "Enviar Mensagem"}
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default ContactForm;

// 🎨 Styled Components
const FormWrapper = styled.div`
  background-color: #131313;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  background-color: #222;
  text-align: center;
  border: none;
  color: white;
  border-bottom: 1px solid #ccc;
  &:focus {
    border-color: rgb(243, 245, 247);
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  background-color: #222;
  font-size: 16px;
  border: none;
  text-align: center;
  color: white;
  border-bottom: 1px solid #ccc;
  resize: none;
  &:focus {
    border-color: rgb(238, 241, 245);
    outline: none;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 12px;
  color: white;
`;

const Checkbox = styled.input`
  margin-top: 3px;
  accent-color: rgb(243, 245, 247);
`;

const Label = styled.label`
  font-size: 12px;
  line-height: 1.5;
  color: white;
`;

const Button = styled.button`
  background-color: #444;
  color: white;
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: rgb(51, 51, 51);
  }
  &:disabled {
    background-color: #666;
    cursor: not-allowed;
  }
`;
