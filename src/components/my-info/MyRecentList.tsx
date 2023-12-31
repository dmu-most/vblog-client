import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// apis
import { getRecentVlog, getRecentBlog } from '@api/my-info';

// types
import { MyContentListProps, MyContentMode, RecentContent } from 'types/my-info';

// components
import MyRecentItem from '@components/my-info/MyRecentItem';
import UndefinedData from '@components/common/UndefinedData';

const RecentApiMapping: Record<MyContentMode, () => Promise<RecentContent[]>> = {
  브이로그: getRecentVlog,
  블로그: getRecentBlog,
};

/** 2023/10/22 - 리뷰 최근기록 리스트 컴포넌트 - by sineTlsl */
const MyRecentList: React.FC<MyContentListProps> = ({ mode }): JSX.Element => {
  const [recentData, setRecentData] = useState<RecentContent[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const selectedApi = RecentApiMapping[mode as MyContentMode];

      if (selectedApi) {
        try {
          const res = await selectedApi();

          setRecentData(res);
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchData();
  }, [mode]);

  return (
    <RecentListContainer>
      {recentData.length > 0 ? (
        <RecentListUl>
          {recentData.map((recent, idx) => (
            <li key={idx}>
              <Link to={`/board/${recent.id}`}>
                <MyRecentItem recent={recent} />
              </Link>
            </li>
          ))}
        </RecentListUl>
      ) : (
        <UndefinedData text={`기록이 없습니다. 게시글을 보러 갈까요? :)`} />
      )}
    </RecentListContainer>
  );
};

export default MyRecentList;

const RecentListContainer = styled.div`
  height: 100%;
`;

const RecentListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  gap: 10px;
  padding: 20px 0;

  > li {
    width: 100%;
  }

  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${props => props.theme.breakpoints.mobileLMax} {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
`;
