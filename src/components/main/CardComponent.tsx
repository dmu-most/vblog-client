import React, { useRef, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { vblogData } from '../../data/dummyData';
import PostCard from '@components/common/PostCard';

// ... (scroll and container styles)

const CardComponent = () => {
  const scrollRef = useRef<HTMLUListElement | null>(null); // Updated type here
  const scrollAmount = 200; // 한 번에 스크롤할 양
  const [scrollPosition, setScrollPosition] = useState(0); // 스크롤의 현재 위치
  const [maxScrollLeft, setMaxScrollLeft] = useState(0); // 가능한 최대 위치

  /** 2023/08/24 - left 화살표 클릭 시 왼쪽 스크롤 함수 - by sineTlsl */
  const HandlerScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= scrollAmount;
    }
  };
  /** 2023/08/24 - right 화살표 클릭 시 오른쪽 스크롤 함수 - by sineTlsl */
  const HandlerScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollAmount;
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

  // const handleScroll = (direction: 'left' | 'right') => {
  //   console.log(direction);
  //   if (scrollRef.current) {
  //     console.log(scrollRef.current);
  //     scrollRef.current.scrollBy({
  //       left: direction === 'left' ? -200 : 200,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  console.log(vblogData.length);

  return (
    <div>
      <ScrollableCardContainer>
        <ScrollContainer>
          {scrollPosition > 0 && (
            <ScrollBtn onClick={HandlerScrollLeft}>
              <FaArrowAltCircleLeft size={45} color="lightgray" />
            </ScrollBtn>
          )}
          <CardContainer ref={scrollRef}>
            {vblogData.map(item => (
              <li key={item.ContentId}>
                <PostCard key={item.ContentId} data={item} />
              </li>
            ))}
          </CardContainer>
          <ScrollBtn onClick={HandlerScrollRight}>
            {scrollPosition < maxScrollLeft && <FaArrowAltCircleRight size={45} color="lightgray" />}
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
  background-color: red;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  width: 55px;

  @media ${props => props.theme.breakpoints.mobileLMax} {
    display: none;
  }
`;

// scroll 방향을 알려주는 문구
// const ScrollIndicatorContainer = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   position: fixed;
//   top: 50%;
//   transform: translateY(-50%);
//   z-index: 1;

//   &.left {
//     left: 10px;
//   }

//   &.right {
//     right: 10px;
//   }

//   > .FaHandPointLeft,
//   > .FaHandPointRight {
//     color: var(--gray-dark);
//     cursor: pointer;
//     transition: color 0.3s ease;
//     font-size: 30px;

//     &:hover {
//       color: var(--black-hunt);
//     }
//   }

//   // 모바일 화면에서는 안 보임
//   @media ${props => props.theme.breakpoints.tabletMax} {
//     display: none;
//     }
// `
