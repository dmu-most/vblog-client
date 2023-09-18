import { styled } from 'styled-components';
// import { vblogDetailData } from '../data/dummyData';

//component
import ContentComponent from '@components/detail/ContentComonent';
import ReviewComponent from '@components/detail/ReviewComponent';
import CommandComponent from '@components/detail/CommandComponent';

// api
import React, { useState, useEffect } from 'react';
import axios from 'axios';


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

  useEffect(() => {
    fetchContentData();
  }, [contentId]);

  return (
    <DetailContainer>
      {contentData ? <ContentComponent data={contentData} /> : <p>Loading...</p>}
      <ReviewComponent />
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
