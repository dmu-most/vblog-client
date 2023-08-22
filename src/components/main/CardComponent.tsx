import React, { ReactNode } from 'react';
import { styled } from "styled-components";
import { useSwipeable } from 'react-swipeable';
import { FaHandPointRight } from "react-icons/fa6";

interface CardProps {
  children: ReactNode;
}

//**2023/07/07 CardComponent
const CardComponent: React.FC<CardProps> = ({ children }) => {
  // 스와이프 스크롤 함수
  const swipeHandlers = useSwipeable({
    trackMouse: true,
  });

  return (
    <ScrollableCardContainer>
      <CardContainer {...swipeHandlers}>
        {children}
        <ScrollIndicatorContainer>
          <FaHandPointRight size={30} style={{ color: 'var(--gray-dark)' }} />
         <ScrollIndicator>scroll</ScrollIndicator>
       </ScrollIndicatorContainer>
     </CardContainer>
    </ScrollableCardContainer>
  );
};

export default CardComponent;

const ScrollableCardContainer = styled.div`
  overflow-x: scroll; /* 세로 스크롤 가능하게 함 */
  -ms-overflow-style: none;
  overflow-y: hidden; /* 스크롤바 없앰 */
  -ms-overflow-style: none; 
  scrollbar-width: none; 


  /* Firefox 브라우저의 스크롤바 숨기기 */
  scrollbar-width: none;
  scrollbar-color: transparent transparent;

  /* Webkit 브라우저의 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    width: 0.5em;
  }
`;

const CardContainer = styled.div`
    ${({ theme }) => theme.common.flexCenterRow};
    width: fit-content;
    height: 400px;
    perspective: 1000px;
    transition: transform 0.3s ease;
    gap: 30px;

    @media ${props => props.theme.breakpoints.mobileSMax} {
      padding: 0 20px 0 20px;
      height: 350px;
      }
`;

// scroll 방향을 알려주는 문구
const ScrollIndicatorContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterCol};
  height: 90%;
  width: 100px;
  position: sticky;
  background-color: rgba(128, 128, 128, 0.1);
  top: 0;
  right: 0;

  // 모바일 화면에서는 안 보임
  @media ${props => props.theme.breakpoints.mobileSMax} {
    display: none;
    }
`;

const ScrollIndicator = styled.div`
  color: var(--gray-dark);
  font-size: 20px;
`;