import React, { useRef, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';

// type
import { vblogListType } from "types/main/list";

// 스와이프 라이브러리
import { useSwipeable } from 'react-swipeable';

// Component
import IntroComponent from "@components/main/IntroComponent";

// Component
import PostCard from '@components/common/PostCard';

//**2023/07/29 CommandComponent- by jh
const CommandComponent: React.FC = (): JSX.Element => {
  // 스와이프 스크롤 함수
  const swipeHandlers = useSwipeable({
    trackMouse: true,
  });

    // 데이터 셋업
  const [vblogData, setVblogData] = useState<vblogListType[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/vlog/list`);
      setVblogData(response.data);
      // console.log('Fetched data:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

    return (
        <CommandContainer>
            <IntroComponent intro="관련 브이로그 추천 👉" />
                <ScrollableCardContainer>
                    <CommandCardContainer {...swipeHandlers}>
                      {vblogData.length > 0 ? (
                        vblogData.map((item) => (
                        <PostCard key={item.contentId} data={item} />
                        ))
                       ) : (
                      <p>Loading...</p>
                      )}
                    </CommandCardContainer>
                 </ScrollableCardContainer>
        </CommandContainer>
    )
}

export default CommandComponent;


const CommandContainer = styled.div`
  width: 70%;
  height: auto;
  margin: 50px 20px 20px 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--white-primary);
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
  padding-bottom: 0.5rem;
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
