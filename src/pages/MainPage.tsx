import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';

// store
import { useContentModeStore } from '@store/useConentModeStore';

// component
import BannerComponent from '@components/main/BannerComponent';
import IntroComponent from '@components/main/IntroComponent';
import CardComponent from '@components/main/CardComponent';


/** 2023/07/25 - 메인 페이지 */
const MainPage: React.FC = (): JSX.Element => {
  const [bannerData, setbannerData] = useState<any>(null);
  const { mode } = useContentModeStore();
  

  const fetchBannerData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/vlog/banner`);
      setbannerData(response.data);
      // console.log('Fetched data:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchBannerData();
  }, []);

  return (
    <MainPageContainer>
      {bannerData ? <BannerComponent data={bannerData} /> : <p>Loading...</p>}
      <IntroComponent intro="OO님을 위한 브블의 콘텐츠 💬" />
      <CardComponent sortBy="rating" />
      <IntroComponent intro="브블이 선정한 금주의 콘텐츠 🏆" />
      <CardComponent sortBy="review" />
      <IntroComponent intro="브블Pick이 가장 많은 콘텐츠 ❤️" />
      <CardComponent sortBy="heart" />
      <IntroComponent intro="새롭게 뜨고 있는 컨텐츠 모음 " />
      <CardComponent sortBy="contentDate"/>
    </MainPageContainer>
  );
};

export default MainPage;

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.8rem;
`;