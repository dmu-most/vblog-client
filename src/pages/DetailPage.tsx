import { styled } from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { vblogDetailData } from '../data/dummyData';

//component
import ContentComponent from '@components/detail/ContentComonent';
import ReviewComponent from '@components/detail/ReviewComponent';
import CommandComponent from '@components/detail/CommandComponent';

// api
import { postRecentItem } from '@api/detail';

interface DetailPageProps {
  contentId: number;
}

/** 2023/07/29 - deatailpage - by jh*/
const DetailPage: React.FC<DetailPageProps> = ({ contentId }): JSX.Element => {
  const [contentData, setContentData] = useState<any>(null); // State to store fetched data

  const fetchContentData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/board/${contentId}`);
      setContentData(response.data);
      // console.log('Fetched data:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  /** 2023/10/23 - 최근목록 POST api 요청 - by sineTlsl */
  const fetchRecentPost = async () => {
    const res = await postRecentItem(contentId);

    try {
      console.log(res.result);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchContentData();
    fetchRecentPost();
  }, [contentId]);

  return (
    <DetailContainer>
      {contentData ? <ContentComponent data={contentData} /> : <p>Loading...</p>}
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
