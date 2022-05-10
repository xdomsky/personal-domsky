import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import * as emailjs from 'emailjs-com';

const ContactContainer = styled.div`
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--text-color);
    transition: 0.5s;
    @media (max-width: 1024px) {
        width: 70%;
    }
`
const ContactInput = styled.div`
    position: relative;
    margin-bottom: 5rem;
    input {
        outline: none;
        background-color: transparent;
        border: 0;
        width: 100%;
        border-bottom: 1px solid var(--text-color);
        color: var(--text-color);
        padding: 0.5rem;
        font-size: 1.2rem;
        padding-top: 20px;
    }
`
const InputLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    text-transform: uppercase;
    font-weight: 600;
    transition: transform 0.25s;
`
const RequiredField = styled.span`
    font-size: 1rem;
    color: #ff7575;
    transform: translateY(-0.8rem);
`
const ContactButton = styled.button`
    border: 2px solid var(--text-color);
    background-color: transparent;
    color: var(--text-color);
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
        background-color: var(--text-color);
        color: var(--background-color);
    }
`
export default function EmbeddedEmail() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_x3v4p9p', 'template_yzrkx8j',
            e.target, '3QPoZ4CuJqfPrcRhg')
            .then((result) => {
                alert('Wiadmość wysłana pomyślnie');
            }, (error) => {
                alert('Nie udało się wysłać');
            });
        e.target.reset();
    }
    return (
        <div>
            <ContactContainer>
                <form onSubmit={sendEmail}>
                    <ContactInput className="input">
                        <input type="text" id="name" name="name" required />
                        <InputLabel for="name" className="input-label">Imię i Nazwisko <RequiredField>*</RequiredField></InputLabel>
                    </ContactInput>
                    <ContactInput className="input">
                        <input type="email" id="email" name="email" required />
                        <InputLabel for="email" className="input-label">E-mail <RequiredField>*</RequiredField></InputLabel>
                    </ContactInput>
                    <ContactInput className="input" >
                        <input type="text" id="message" name="message" required />
                        <InputLabel for="message" className="input-label">Wiadomość <RequiredField>*</RequiredField></InputLabel>
                    </ContactInput>
                    <ContactButton type="submit" className="button">Wyślij</ContactButton>
                </form>
            </ContactContainer>
        </div>
    )
}