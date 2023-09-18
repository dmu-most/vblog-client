import { styled } from 'styled-components';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// store
import { useContentModeStore } from '@store/useConentModeStore';

// Type
import { vblogListType } from "types/main/list";

// Card
import PostCard from '@components/common/PostCard';


/** 2023/08/23 - category card - by jh */
const CategoryCardComponent: React.FC = (): JSX.Element => {
  const { mode } = useContentModeStore();
  const { category } = useParams();

  // 데이터 셋업
  const [vblogCategoryData, setVblogCategoryData] = useState<vblogListType[]>([]);

  let apiUrl: string;  // Explicitly declare as string type
   if(mode === "V") {
     apiUrl = `${process.env.REACT_APP_API_URL}/vlog/category/${category}`;
   }
   else if(mode === "B") {
     apiUrl= `${process.env.REACT_APP_API_URL}/blog/category/${category}`;
   }

    const CategoryData = async () => {
    try {
      const response = await axios.get(apiUrl);
      
      if (mode === "V") {
        // console.log('Fetched data for V:', response.data);  
      } else if (mode === "B") {
        // console.log('Fetched data for B:', response.data);
      }
      
      setVblogCategoryData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    CategoryData();
  }, [mode, category]);

  /** 2023/09/18 - 무한 스크롤 사용 함수 - by jh */
  // 타겟 요소 지정
  const containerRef = useRef(null);

  const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
  };

  // 무한 스크롤을 위한 useEffect
  useEffect(() => {
    (async () => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
        console.log("ㅋㅋㅋ");
        }
      }, options);
  
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
  
      return () => {
        observer.disconnect();
      };
    })();
  }, [containerRef]);
  /** 무한 스크롤 */

  return (
    <CategoryCardContainer>
      <CardContainer>
        {vblogCategoryData.map((item) => (
          <PostCard key={item.contentId} data={item} />
        ))}
      </CardContainer>
    </CategoryCardContainer>
  );
};

export default CategoryCardComponent;

const CategoryCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: auto;
    gap: 20px;
    margin-top: 1rem;
    

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;