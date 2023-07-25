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
    width: 100%;
    height: 370px;
    justify-content: space-between;

    /* grid-template-columns: 1fr;
    @media ${props => props.theme.breakpoints.mobileLMax} {
      grid-template-columns: repeat(1, 1fr);
    }
    @media ${props => props.theme.breakpoints.tablet} {
     grid-template-columns: repeat(3, 1fr);
   }
   @media ${props => props.theme.breakpoints.desktop} {
     grid-template-columns: repeat(4, 1fr);
   }  */

     grid-template-columns: 1fr;
  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;