import React from 'react';
import styled from 'styled-components';
import { colors } from '../colors';

const FooterWrapper = styled.footer`
  background: ${colors.secondary};
  color: ${colors.white};
  text-align: center;
  padding: 1rem;
  margin-top: 2rem; 
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; 2024 Smith Software Solutions. All rights reserved.</p>
    </FooterWrapper>
  );
}

export default Footer;