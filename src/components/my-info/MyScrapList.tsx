import styled from 'styled-components';
import { useEffect, useState } from 'react';

// apis
import { getScrapBlog, getScrapVlog } from '@api/my-info';

// types
import { MyContentListProps, ScrapResponseType, MyContentMode } from 'types/my-info';

// components
import MyScrapItem from '@components/my-info/MyScrapItem';
import UndefinedData from '@components/common/UndefinedData';

const scrapApiMapping: Record<MyContentMode, () => Promise<ScrapResponseType[]>> = {
  블로그: getScrapBlog,
  브이로그: getScrapVlog,
};

/** 2023/10/23 - 스크랩 리스트 컴포넌트 - by sineTlsl */
const MyScrapList: React.FC<MyContentListProps> = ({ mode }): JSX.Element => {
  const [scrapData, setScrapData] = useState<ScrapResponseType[]>([]);

  useEffect(() => {
    /** 2023/11/12 - 스크랩 데이터 불러오기 - by sineTlsl */
    const fetchScrapData = async () => {
      const selectedApi = scrapApiMapping[mode as MyContentMode];

      if (selectedApi) {
        try {
          const res = await selectedApi();
          setScrapData(res);
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchScrapData();
  }, [mode]);

  return (
    <ScrapListContainer>
      {scrapData && scrapData.length >= 1 && scrapData[0].boards.length > 0 ? (
        <ScrapListUl>
          {scrapData.map(post => (
            <li key={post.id}>
              <MyScrapItem scrap={post} />
            </li>
          ))}
        </ScrapListUl>
      ) : (
        <UndefinedData text={`저장된 스크랩이 없습니다. 추가하러 가볼까요? :)`} />
      )}
    </ScrapListContainer>
  );
};

export default MyScrapList;

const ScrapListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ScrapListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100%;
  gap: 20px;
  padding: 20px 0;

  > li {
    width: 100%;
  }

  @media ${props => props.theme.breakpoints.mobileLMax} {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`;
