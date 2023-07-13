import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: var(--gray-light);
  width: 100%;
  height: 150px;
  position: fixed;
  bottom: 0;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const FooterText = styled.p`
  color: var(--black);
`;

// Footer 컴포넌트를 정의합니다.
const Footer: React.FC = () => {
  return (
    <footer>
      <FooterContainer>
        <FooterText>This is the footer.</FooterText>
      </FooterContainer>
    </footer>
 
  );
};

export default Footer;