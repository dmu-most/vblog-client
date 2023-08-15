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
    height: 350px;

    // 모바일 쿼리 관련 코드
    display: grid;
    perspective: 1000px;
    transition: transform 0.3s ease;
    grid-template-columns: 1fr;
    gap: 30px;
    justify-items: center;

  // breakpoint로는 코드가 먹지 않아 사이즈에 맞게 지정
  @media screen and (min-width: 475px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1350px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;