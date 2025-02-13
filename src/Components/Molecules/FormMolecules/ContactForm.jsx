import React, { useState } from "react";
import styled from "styled-components";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Qui puoi aggiungere la logica per inviare i dati al backend
    console.log("Form Data:", formData);

    // Esempio di invio dati al backend
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <FormWrapper>
      <FormTitle>CONTACT US</FormTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="surname"
          placeholder="Surname"
          value={formData.surname}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            name="consent"
            id="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
          />
          <Label htmlFor="consent">
            I declare that I have seen the information pursuant to article 13 and I consent to the processing of my personal data.
          </Label>
        </CheckboxContainer>
        <Button type="submit">Send Message</Button>
      </Form>
    </FormWrapper>
  );
};

export default ContactForm;

// Styled Components for Contact Form
const FormWrapper = styled.div`
  background-color: #131313;
  padding: 0px;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  color: white;
  margin-bottom: 50px;
  text-align: center;
`;

const Form = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  background-color: #131313;
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
  background-color: #131313;
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
  background-color: #131313;
  color: white;
  font-size: 16px;
  padding: 10px;
  border-color: rgba(204, 204, 204, 0.7);
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: rgb(51, 51, 51);
  }
`;