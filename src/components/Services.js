import React from 'react';
import styled from 'styled-components';
import { colors } from '../colors';

const ServicesSection = styled.section`
  padding: 5rem 10%;
  background-color: ${colors.background};
`;

const Title = styled.h2`
  color: ${colors.secondary};
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ServiceItem = styled.div`
  background: ${colors.white};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceTitle = styled.h3`
  color: ${colors.primary};
  margin-bottom: 1rem;
`;

function Services() {
  return (
    <ServicesSection id="services">
      <Title>Our Services</Title>
      <ServicesList>
        <ServiceItem>
          <ServiceTitle>Custom Software Development</ServiceTitle>
          <p>Tailored solutions to meet your specific business needs.</p>
        </ServiceItem>
        <ServiceItem>
          <ServiceTitle>Mobile App Development</ServiceTitle>
          <p>Native and cross-platform mobile applications for iOS and Android.</p>
        </ServiceItem>
        <ServiceItem>
          <ServiceTitle>Web Application Development</ServiceTitle>
          <p>Responsive and scalable web applications using modern technologies.</p>
        </ServiceItem>
        <ServiceItem>
          <ServiceTitle>Cloud Solutions</ServiceTitle>
          <p>Secure and efficient cloud-based services and infrastructure. Our primary focus is always security.</p>
        </ServiceItem>
      </ServicesList>
    </ServicesSection>
  );
}

export default Services;