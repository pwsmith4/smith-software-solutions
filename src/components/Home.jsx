import React from 'react';
import styled from 'styled-components';
import { colors } from '../colors';

const HomeSection = styled.section`
  min-height: calc(100vh - 100px); // Subtract new header height
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(45deg, ${colors.primary}, ${colors.secondary});
  color: ${colors.white};
`;


const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
`;

function Home() {
  return (
    <HomeSection id="home">
      <Title>Welcome to Smith Software Solutions</Title>
      <Subtitle>We create innovative software solutions for businesses of all sizes.</Subtitle>
    </HomeSection>
  );
}

export default Home;