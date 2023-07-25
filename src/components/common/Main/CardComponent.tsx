import React, { ReactNode } from 'react';
import { styled } from "styled-components";

interface CardProps {
  children: ReactNode;
}

const CardComponent: React.FC<CardProps> = ({ children }) => {
  return (
    <CardContainer>
      {children}
    </CardContainer>
  );
};

export default CardComponent;


const CardContainer = styled.div`
    ${({ theme }) => theme.common.flexRow};
    background-color: var(--icon-red);
    width: 100%;
    height: 370px;
`;