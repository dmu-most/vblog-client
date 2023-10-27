import React, { useRef, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';
import { vblogListType } from 'types/main/list';

// store
import { useContentModeStore } from '@store/useConentModeStore';

// react icon
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

//api
import { getUserCardCheck } from '@api/main/vblogList';

// Component
import PostCard from '@components/common/PostCard';

// 화살표 + 스크롤 라이브러리
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 

//**2023/07/07 CardComponent - by jh
const UserCardComponent: React.FC = (): JSX.Element => {
  const { mode } = useContentModeStore();

  // 데이터 셋업
  const [vblogData, setVblogData] = useState<vblogListType[]>([]);

  const fetchData = async () => {
  const res = await getUserCardCheck();
  console.log('value',res);
  try{
    setVblogData(res);
  }catch (error) {
    console.error("error fetching fetcgdata", error);
  }
}

  useEffect(() => {
    fetchData();
  }, []);

  //**2023/10/17 반응형의 의해 카드 갯수를 나타내는 함수 - by jh
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1100 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1200, min: 1020 },
      items: 3,
    },
    mobileL: {
      breakpoint: { max: 1020, min: 400 },
      items: 2,
    },
    mobileS: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
    },
  };

  return (
    <ScrollableCardContainer>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        deviceType="desktop"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {vblogData.length > 0
          ? vblogData.map(item => <PostCard key={item.contentId} data={item} />)
          : <p>Loading...</p>}
      </Carousel>
    </ScrollableCardContainer>
  );
};

export default UserCardComponent;

const ScrollableCardContainer = styled.div`
  margin: 2rem 1rem ;
  overflow-y: auto;
  z-index: 2;
`;

const CardContainer = styled.ul`
  ${({ theme }) => theme.common.flexCenterRow};
  margin: 1rem 2rem 1rem 2rem;
  height: 400px;
  transition: transform 0.3s ease;
  gap: 20px;
  overflow: auto; // add

  @media ${props => props.theme.breakpoints.mobileSMax} {
    margin: 0 2rem 0 2rem;
    padding: 0 20px 0 20px;
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
