import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';

// component
import BannerComponent from '@components/main/BannerComponent';
import IntroComponent from '@components/main/IntroComponent';
import CardComponent from '@components/main/CardComponent';


/** 2023/07/25 - 메인 페이지 */
const MainPage: React.FC = (): JSX.Element => {
    const [imgUrl, setImgUrl] = useState<string>('');

  useEffect(() => {
    // 이미지 URL을 받아오는 API 호출
    axios.get(`${process.env.REACT_APP_API_URL}/vlog/banner`)
      .then((response) => {
        setImgUrl(response.data.imgUrl);
         console.log('API Response Data:', response.data);
         console.log('Updated imgUrl:', response.data.imgUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <MainPageContainer>
      <BannerComponent data={{ imgUrl: imgUrl }} /> 
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