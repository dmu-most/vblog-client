import { styled } from 'styled-components';
import React, { useState, useEffect } from 'react';

//component
import ContentComponent from '@components/detail/ContentComonent';
import ReviewComponent from '@components/detail/ReviewComponent';
import CommandComponent from '@components/detail/CommandComponent';

// api
import { getContentCheck } from '@api/detail/vblogContent';
import { postRecentItem } from '@api/detail';

interface DetailPageProps {
  contentId: number;
}

/** 2023/07/29 - deatailpage - by jh*/
const DetailPage: React.FC<DetailPageProps> = ({ contentId }): JSX.Element => {
  const [contentData, setContentData] = useState<any>(null);
  const [refresh, setRefresh] = useState(false);

  //**2023/10/24 좋아요/싫어요 클릭 시 리렌더링 함수 - by jh
  const triggerRefresh = () => {
    setRefresh(!refresh);
  };

  const getAllContentCheck = async () => {
   const res = await getContentCheck(contentId); 
   setContentData(res);
  };

  /** 2023/10/23 - 최근목록 POST api 요청 - by sineTlsl */
  const fetchRecentPost = async () => {
    const res = await postRecentItem(contentId);

    try {
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllContentCheck();
    fetchRecentPost();
  }, [contentId]);

  return (
    <DetailContainer>
      {contentData ? <ContentComponent data={contentData} contentId={contentId}/> : <p>Loading...</p>}
      <ReviewComponent contentId={contentId} />
      <CommandComponent />
    </DetailContainer>
  );
};

export default DetailPage;

const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
