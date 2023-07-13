import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--gray-light);
  width: 100%;
  height: 180px;
  position: fixed;
  bottom: 0;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  background-color: var(--white-dark);
  /* max-width: ${({ theme }) => theme.widthSize.contentMax}; */
  max-width: 1500px;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.p`
  color: var(--black);
`;

const Footer: React.FC = () => {
  return (
    <footer>
      <FooterContainer>
        <TextContainer>
          <FooterText>This is the footer.</FooterText>
          
        </TextContainer>
      </FooterContainer>
    </footer>
  );
};

export default Footer;
