import { styled } from "styled-components";
import React, { ReactNode } from 'react';

// Component
import IntroComponent from "@components/main/IntroComponent";

interface CardProps {
  children: ReactNode;
}

//**2023/07/29 CommandComponent
const CommandComponent: React.FC<CardProps> = ({ children }) => {
    return (
        <CommandContainer>
            <IntroComponent intro="관련 브이로그 추천 👍" />
            <CommandCardContainer>
                {children}
            </CommandCardContainer>
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
`;

const CommandCardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 370px;

    // 모바일 쿼리 관련 코드
    perspective: 1000px;
    transition: transform 0.3s ease;
    grid-template-columns: 1fr;
    gap: 50px;
    justify-items: center;
`;
