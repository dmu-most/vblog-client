import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { getvlogbannerCheck, getblogbannerCheck } from '@api/main/vblogList';

// store
import { useContentModeStore } from '@store/useConentModeStore';
import { useMemberStore } from '@store/useMemberStore';

// component
import BannerComponent from '@components/main/BannerComponent';
import IntroComponent from '@components/main/IntroComponent';
import CardComponent from '@components/main/CardComponent';
import UserCardComponent from '@components/main/UserCardComponent';

/** 2023/07/25 - 메인 페이지 */
const MainPage: React.FC = (): JSX.Element => {
  const [bannerData, setBannerData] = useState<any>(null);
  const { mode } = useContentModeStore();
  const { member } = useMemberStore();

  const getAllBannerCheck = async () => {
  try {
    let bannerApi;
    if (mode === 'V') {
      bannerApi = getvlogbannerCheck; // Use the vlog banner API
    } else if (mode === 'B') {
      bannerApi = getblogbannerCheck; // Use the blog banner API
    }

    if (bannerApi) {
      const res = await bannerApi();

      if (mode === 'V') {
        // console.log('Fetched data for V:', res.data);
      } else if (mode === 'B') {
        // console.log('Fetched data for B:', res.data);
      }
      setBannerData(res);
    } else {
      console.error('Invalid mode:', mode);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

  useEffect(() => {
    getAllBannerCheck();
  }, [mode]);

  return (
    <MainPageContainer>
      {bannerData ? <BannerComponent data={bannerData} /> : <p>Loading...</p>}
      {member ? (
        <>
          <IntroComponent intro="회원님을 위한 브블의 콘텐츠 💬" />
          <UserCardComponent />
        </>
      ) : null}
      <IntroComponent intro="브블이 선정한 금주의 콘텐츠 🏆" />
      <CardComponent endpoint="reviewlist" />
      <IntroComponent intro="브블Pick이 가장 많은 콘텐츠 ❤️" />
      <CardComponent endpoint="likelist" />
      <IntroComponent intro="새롭게 뜨고 있는 컨텐츠 모음 " />
      <CardComponent endpoint="newlist" />
    </MainPageContainer>
  );
};

export default MainPage;

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.8rem;

  @media ${props => props.theme.breakpoints.mobileLMax} {
    padding: 0;
  }
`;
