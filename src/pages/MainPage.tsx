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
  const [bannerData, setBannerData] = useState<any>(null);
  const { mode } = useContentModeStore();
  

   let apiUrl: string;  // Explicitly declare as string type
   if(mode === "V") {
     apiUrl = `${process.env.REACT_APP_API_URL}/vlog/banner`;
   }
   else if(mode === "B") {
     apiUrl= `${process.env.REACT_APP_API_URL}/blog/banner`;
   }

  const fetchBannerData = async () => {
    try {
      const response = await axios.get(apiUrl);
      
      if (mode === "V") {
        console.log('Fetched data for V:', response.data);  // Log the fetched data to console for V mode
      } else if (mode === "B") {
        console.log('Fetched data for B:', response.data);  // Log the fetched data to console for B mode
      }
      
      setBannerData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchBannerData();
  }, [mode]);

  return (
    <MainPageContainer>
      {bannerData ? <BannerComponent data={bannerData} /> : <p>Loading...</p>}
      <IntroComponent intro="OO님을 위한 브블의 콘텐츠 💬" />
      <CardComponent />
      <IntroComponent intro="브블이 선정한 금주의 콘텐츠 🏆" />
      <CardComponent />
      <IntroComponent intro="브블Pick이 가장 많은 콘텐츠 ❤️" />
      <CardComponent />
      <IntroComponent intro="새롭게 뜨고 있는 컨텐츠 모음 " />
      <CardComponent />
    </MainPageContainer>
  );
};

export default MainPage;

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.8rem;
`;