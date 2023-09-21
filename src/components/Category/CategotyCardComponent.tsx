import { styled } from 'styled-components';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// spinner
import { PuffLoader } from "react-spinners"

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
  const [isLoading, setIsLoading] = useState(false);
  const [vblogCategoryData, setVblogCategoryData] = useState<vblogListType[]>([]);
  const [page, setPage] = useState(1); // Current page

  // typescript 영향으로 빈 문자열 전역 선언
  let apiUrl = '';

  /** 2023/09/10 - catogorypage api 서버 연결 - by jh */
  const fetchCategoryData = async () => {
    setIsLoading(true);
    try {
      // let apiUrl: string;

      if (mode === 'V') {
        apiUrl = `${process.env.REACT_APP_API_URL}/vlog/category/${category}?page=${page}`;
      } else if (mode === 'B') {
        apiUrl = `${process.env.REACT_APP_API_URL}/blog/category/${category}?page=${page}`;
      }

      const response = await axios.get(apiUrl);
      const newData = response.data;

      if (newData.length === 0) {
        // No more data to load
        return;
      }

      setVblogCategoryData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  /** 2023/09/10 - 스크롤 시 데이터에 의해 페이지가 무한 생성 - by jh */
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    if (
      container.getBoundingClientRect().bottom <= window.innerHeight &&
      !isLoading
    ) {
      fetchCategoryData();
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);

  /** 2023/09/10 - 무한스크롤 이벤트 리스너 , 비동기 처리 - by jh */
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading, fetchCategoryData]);

  /** 2023/09/10 - 이때 mode와 category도 페이지가 1일때 바동기 처리 - by jh */
  useEffect(() => {
    setVblogCategoryData([]);
    setPage(1);
  }, [category, mode]);

  useEffect(() => {
    fetchCategoryData();
  }, [mode, category]);

  return (
    <CategoryCardContainer>
      <CardContainer>
        {vblogCategoryData.map((item) => (
          <PostCard key={item.contentId} data={item} />
        ))}
      </CardContainer>

    {isLoading && (
      <SpinnerContainer>
        <PuffLoader color="var(--green-hunt)" loading={true} size={40} />
      </SpinnerContainer>
    )}

      <div ref={containerRef}></div>
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

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--green-hunt);
  height: 100vh; /* Adjust this value to your liking */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8); /* Add a semi-transparent background */
  z-index: 1000; /* Adjust this value based on your layout */
`;