import React, { useRef, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';
import { vblogListType } from "types/main/list";

// react icon
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

// 실제 데이터가 들어올 시 제거
// import { vblogData } from '../../data/dummyData';

//api
// import { vblogList } from '@api/main/vblogList';

// Component
import PostCard from '@components/common/PostCard';


//**2023/07/07 CardComponent - by jh
const CardComponent: React.FC<{ sortBy: string }> = ({ sortBy }): JSX.Element => {
  const scrollRef = useRef<HTMLUListElement | null>(null); // Updated type here
  const scrollAmount = 600; // 한 번에 스크롤할 양
  const [scrollPosition, setScrollPosition] = useState(0); // 스크롤의 현재 위치
  const [maxScrollLeft, setMaxScrollLeft] = useState(0); // 가능한 최대 위치

  // 데이터 셋업
  const [vblogData, setVblogData] = useState<vblogListType[]>([]);

  const sortedVblogData = [...vblogData];

  if (sortBy === "heart") {
    sortedVblogData.sort((a, b) => b.heart - a.heart);
    console.log("sortedVblogData:", sortedVblogData);
  }

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


  /** 2023/08/24 - left 화살표 클릭 시 왼쪽 스크롤 함수 - by sineTlsl */
  const HandlerScrollLeft = () => {
    if (scrollRef.current) {
      const newPosition = scrollRef.current.scrollLeft - scrollAmount;
      scrollRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth', // 스무스 하게 이동하기 위해 추가 - by jh
      });
    }
  };

  /** 2023/08/24 - right 화살표 클릭 시 오른쪽 스크롤 함수 - by sineTlsl */
  const HandlerScrollRight = () => {
    if (scrollRef.current) {
      const newPosition = scrollRef.current.scrollLeft + scrollAmount;
      console.log('New Position:', newPosition);
      scrollRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth', // 스무스 하게 이동하기 위해 추가 - by jh
      });
    }
  };

  useEffect(() => {
    /** 2023/08/24 - 컴포넌트가 마운트 or 언마운트 되었을 때, 스크롤 이벤트 리스너 추가 및 제거하는 함수 - by sineTlsl */
    const onScroll = () => {
      if (scrollRef.current) {
        setScrollPosition(scrollRef.current.scrollLeft);
      }
    };

    // 스크롤이 이동할 때마다 현재 스크롤 위치를 계산하고 업데이트
    if (scrollRef.current) {
      setMaxScrollLeft(scrollRef.current.scrollWidth - scrollRef.current.clientWidth);
    }

    scrollRef.current?.addEventListener('scroll', onScroll);

    return () => scrollRef.current?.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      <ScrollableCardContainer>
        <ScrollContainer> 
          {scrollPosition > 0 && (
            <ScrollBtn onClick={HandlerScrollLeft}>
              <FaArrowAltCircleLeft className='FaArrowAltCircleLeft'/>
            </ScrollBtn>
          )}
          <CardContainer ref={scrollRef}>
            {sortedVblogData.length > 0 ? (
              sortedVblogData.map((item) => (
                <PostCard key={item.contentId} data={item} />
             ))
            ) : (
            <p>Loading...</p>
            )}
          </CardContainer>
          <ScrollBtn onClick={HandlerScrollRight}>
            {scrollPosition < maxScrollLeft && <FaArrowAltCircleRight className='FaArrowAltCircleRight'/>}
          </ScrollBtn>
        </ScrollContainer>
      </ScrollableCardContainer>
    </div>
  );
};

export default CardComponent;

const ScrollableCardContainer = styled.div`
  width: 100%;

  // 스크롤바 없애기
  // chrome and safari
  ::-webkit-scrollbar {
    display: none;
  }
  // firefox
  scrollbar-width: none;
`;

const CardContainer = styled.ul`
  ${({ theme }) => theme.common.flexCenterRow};
  width: fit-content;
  height: 400px;

  transition: transform 0.3s ease;
  gap: 30px;
  overflow: auto; // add

  @media ${props => props.theme.breakpoints.mobileSMax} {
    padding: 0 20px 0 20px;
    height: 350px;
  }
`;

const ScrollContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ScrollBtn = styled.button`
  border: none;
  background: transparent;
  transition: color 0.3s ease;
  font-size: 2rem;
  cursor: pointer;
  width: 55px;

  > .FaArrowAltCircleLeft,
  > .FaArrowAltCircleRight {
    color: var(--gray-light);
    cursor: pointer;
    transition: color 0.3s ease;
    font-size: 40px;
    
    &:hover {
      color: var(--gray-dark);
    }
  }

  @media ${props => props.theme.breakpoints.mobileLMax} {
    display: none;
  }
`;