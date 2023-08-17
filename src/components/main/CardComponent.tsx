import React, { ReactNode } from 'react';
import { styled } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSwipeable } from 'react-swipeable';

interface CardProps {
  children: ReactNode;
  currentIndex: number;
  onNextClick: () => void;
  onPrevClick: () => void;
}

//**2023/07/07 CardComponent
const CardComponent: React.FC<CardProps> = ({ children, onNextClick, onPrevClick }) => {
  // 스와이프 스크롤 함수
  const swipeHandlers = useSwipeable({
    onSwipedLeft: onNextClick,
    onSwipedRight: onPrevClick,
    trackMouse: true,
  });

  return (
    <ScrollableCardContainer>
    <CardContainer {...swipeHandlers}>
      {children}
      <ArrowIconWrapper className="left" onClick={() => onPrevClick()}>
        <IoIosArrowBack className='ArrowBack' />
      </ArrowIconWrapper>
      <ArrowIconWrapper className="right" onClick={() => onNextClick()}>
        <IoIosArrowForward className='ArrowForward' />
      </ArrowIconWrapper>
    </CardContainer>
    </ScrollableCardContainer>
  );
};

export default CardComponent;

const ScrollableCardContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden; /* 스크롤바 없앰 */
  -ms-overflow-style: none; 
  scrollbar-width: none; 
`;

const CardContainer = styled.div`
    ${({ theme }) => theme.common.flexRow};
    width: fit-content;
    height: 400px;

    // 모바일 쿼리 관련 코드
    display: grid;
    perspective: 1000px;
    transition: transform 0.3s ease;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      padding: 0 20px 0 20px;
      }
`;

// 화살표
const ArrowIconWrapper = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  z-index: 1;

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }

  > .ArrowBack,
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