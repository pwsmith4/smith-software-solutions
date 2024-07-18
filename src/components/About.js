import React from 'react';
import styled from 'styled-components';
import { colors } from '../colors';

const AboutSection = styled.section`
  padding: 5rem 10%;
  background-color: ${colors.white};
`;

const Title = styled.h2`
  color: ${colors.secondary};
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Content = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${colors.text};
`;

function About() {
  return (
    <AboutSection id="about">
      <Title>About Us</Title>
      <Content>
        Smith Software Solutions is a leading software development company dedicated to delivering high-quality, innovative solutions to meet our clients' needs. With a team of experienced developers and cutting-edge technologies, we strive to transform ideas into powerful, efficient, and user-friendly software applications.
      </Content>
    </AboutSection>
  );
}

export default About;