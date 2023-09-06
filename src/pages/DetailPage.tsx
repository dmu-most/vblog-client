import { styled } from 'styled-components';
// import { vblogDetailData } from '../data/dummyData';

//component
import ContentComponent from '@components/detail/ContentComonent';
import ReviewComponent from '@components/detail/ReviewComponent';
// import CommandComponent from '@components/detail/CommandComponent';
// import PostCard from '@components/common/PostCard';

// api
import React, { useState, useEffect } from 'react';
import axios from 'axios';



/** 2023/07/29 - 디테일 페이지 */
const DetailPage: React.FC = (): JSX.Element => {
  const [contentData, setContentData] = useState(null); // State to store fetched data

  useEffect(() => {
    const fetchContentData = async () => {
      try {
        const response = await axios.get('http://ec2-3-39-126-215.ap-northeast-2.compute.amazonaws.com:8080/board/1');
        setContentData(response.data); // Update the state with fetched data
        console.log('data:', response.data);
      } catch (error) {
        console.error('Error fetching content data:', error);
      }
    };

    fetchContentData();
  }, []);

  return (
    <DetailContainer>
      {contentData ? <ContentComponent data={contentData} /> : <p>Loading...</p>}
      <ReviewComponent />
      {/* <CommandComponent /> */}
    </DetailContainer>
  );
};

export default DetailPage;

const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
