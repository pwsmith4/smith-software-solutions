import React from 'react';
import styled from 'styled-components';
import { colors } from '../colors';

const ContactSection = styled.section`
  padding: 5rem 10%;
  background-color: ${colors.background};
`;

const Title = styled.h2`
  color: ${colors.secondary};
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const ContactItem = styled.div`
  background: ${colors.white};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const ContactTitle = styled.h3`
  color: ${colors.primary};
  margin-bottom: 1rem;
`;

function Contact() {
  return (
    <ContactSection id="contact">
      <Title>Contact Us for a Quote</Title>
      <ContactInfo>
        <ContactItem>
          <ContactTitle>Email</ContactTitle>
          <p>parkersmith@smithsoftwaresolutions.tech</p>
        </ContactItem>
        <ContactItem>
          <ContactTitle>Phone</ContactTitle>
          <p>(916) 458-2455</p>
        </ContactItem>
      </ContactInfo>
    </ContactSection>
  );
}

export default Contact;