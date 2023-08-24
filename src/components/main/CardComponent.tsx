import React, { useRef } from 'react';
import { styled } from 'styled-components';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { vblogData } from '../../data/dummyData';
import PostCard from '@components/common/PostCard';

// ... (scroll and container styles)

const CardComponent = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null); // Updated type here

    const handleScroll = (direction: "left" | "right") => {
          console.log(direction)
      if (scrollRef.current) {
        console.log(scrollRef.current)
        scrollRef.current.scrollBy({
          left: direction === "left" ? -200 : 200,
          behavior: "smooth",
        });
      }
    };

    console.log(vblogData.length)
  
    return (
        <div>
            <ScrollableCardContainer>
                {vblogData.length >= 5 && (
                    <ScrollContainer>
                        <ScrollBtn onClick={() => handleScroll("left")}>
                            <FaArrowAltCircleLeft size={45} color="lightgray" />
                        </ScrollBtn>
                        <CardContainer ref={scrollRef}>
                            {vblogData.map((item) => (
                                <PostCard key={item.ContentId} data={item} />
                            ))}
                        </CardContainer>
                        {vblogData.length >= 4 && (
                            <ScrollBtn onClick={() => handleScroll("right")}>
                                <FaArrowAltCircleRight size={45} color="lightgray" />
                            </ScrollBtn>
                        )}
                    </ScrollContainer>
                )}
            </ScrollableCardContainer>
        </div>
    );
};


export default CardComponent;

const ScrollableCardContainer = styled.div`
  overflow-x: scroll; /* 세로 스크롤 가능하게 함 */
  -ms-overflow-style: none;
  overflow-y: hidden; /* 스크롤바 없앰 */
  -ms-overflow-style: none; 

  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar in Webkit browsers */
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

  @media ${(props) => props.theme.breakpoints.mobileLMax} {
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

