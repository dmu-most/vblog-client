import { styled } from "styled-components";
import React, { ReactNode } from 'react';

// 스와이프 라이브러리
import { useSwipeable } from 'react-swipeable';

// Component
import IntroComponent from "@components/main/IntroComponent";

interface CardProps {
  children: ReactNode;
}

//**2023/07/29 CommandComponent- by jh
const CommandComponent: React.FC<CardProps> = ({ children }) => {
  // 스와이프 스크롤 함수
  const swipeHandlers = useSwipeable({
    trackMouse: true,
  });

    return (
        <CommandContainer>
            <IntroComponent intro="관련 브이로그 추천 👉" />
                <ScrollableCardContainer>
                    <CommandCardContainer {...swipeHandlers}>
                        {children}
                    </CommandCardContainer>
                 </ScrollableCardContainer>
        </CommandContainer>
    )
}

export default CommandComponent;


const CommandContainer = styled.div`
  width: 80%;
  height: auto;
  margin: 50px 20px 20px 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 

  @media ${props => props.theme.breakpoints.mobileSMax} {
    width: 90%;
    }
`;

const ScrollableCardContainer = styled.div`
  overflow-x: scroll; /* 세로 스크롤 가능하게 함 */
  -ms-overflow-style: none;
  overflow-y: hidden; /* 스크롤바 없앰 */
  -ms-overflow-style: none; 
  scrollbar-width: none; 
  margin: 20px;


  /* Firefox 브라우저의 스크롤바 숨기기 */
  scrollbar-width: none;
  scrollbar-color: transparent transparent;

  /* Webkit 브라우저의 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    width: 0.5em;
  }
`;

const CommandCardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: fit-content;
    height: auto;

    // 모바일 쿼리 관련 코드
    perspective: 1000px;
    transition: transform 0.3s ease;
    grid-template-columns: 1fr;
    gap: 50px;
    justify-items: center;
`;
