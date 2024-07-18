import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { colors } from './colors';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    color: ${colors.text};
    margin: 0;
    padding: 0;
  }
`;

const MainContent = styled.main`
  padding-top: 80px; // Adjust this value based on your header height
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContent>
        <Home />
        <Services />
        <About />
        <Contact />
      </MainContent>
      <Footer />
    </>
  );
}

export default App;