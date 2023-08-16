import React, { ReactNode } from 'react';
import { styled } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CardProps {
  children: ReactNode;
}

interface ArrowIconProps {
  left?: boolean;
  right?: boolean;
}

const CardComponent: React.FC<CardProps> = ({ children }) => {
  return (
    <CardContainer>
      {children}
      <ArrowIconWrapper left>
        <IoIosArrowBack className='ArrowBack' />
      </ArrowIconWrapper>
      <ArrowIconWrapper right>
        <IoIosArrowForward className='ArrowForward' />
      </ArrowIconWrapper>
    </CardContainer>
  );
};

export default CardComponent;


const CardContainer = styled.div`
    ${({ theme }) => theme.common.flexRow};
    width: 100%;
    height: auto;

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

const ArrowIconWrapper = styled.div<ArrowIconProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  ${({ left, right }) => (left ? 'left: 10px;' : right ? 'right: 10px;' : '')};
  z-index: 1;

  > .ArrowBack {
  color: var(--gray-primary);
  cursor: pointer;
  transition: color 0.3s ease;
  font-size: 50px;

  &:hover {
    color: var(--black-hunt);
    }
  }

  > .ArrowForward {
  color: var(--gray-primary);
  cursor: pointer;
  transition: color 0.3s ease;
  font-size: 50px;

  &:hover {
    color: var(--black-hunt);
    }
  }
`;