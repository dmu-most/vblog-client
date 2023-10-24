import { styled } from 'styled-components';
import React, { useState, useEffect } from 'react';

//component
import ContentComponent from '@components/detail/ContentComonent';
import ReviewComponent from '@components/detail/ReviewComponent';
import CommandComponent from '@components/detail/CommandComponent';

// api
import { getContentCheck } from '@api/detail/vblogContent';


interface DetailPageProps {
  contentId: number;
}


/** 2023/07/29 - deatailpage - by jh*/
const DetailPage: React.FC<DetailPageProps> = ({ contentId }): JSX.Element => {
  const [contentData, setContentData] = useState<any>(null); // State to store fetched data

  const getAllContentCheck = async () => {
   const res = await getContentCheck(contentId); 
   setContentData(res);
  };

  useEffect(() => {
    getAllContentCheck();
  }, [contentId]);

  return (
    <DetailContainer>
      {contentData ? <ContentComponent data={contentData} /> : <p>Loading...</p>}
      <ReviewComponent contentId={contentId}/>
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
