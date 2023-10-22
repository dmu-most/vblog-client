import styled from 'styled-components';
import { useState, useEffect } from 'react';

// apis
import { getRecentVlog, getRecentBlog } from '@api/my-info';

// types
import { MyContentListProps, MyContentMode, RecentListItem } from 'types/my-info';

// components
import MyRecentItem from '@components/my-info/MyRecentItem';
import { Link } from 'react-router-dom';

const RecentApiMapping: Record<MyContentMode, () => Promise<RecentListItem[]>> = {
  브이로그: getRecentVlog,
  블로그: getRecentBlog,
};
/** 2023/10/22 - 리뷰 최근기록 리스트 컴포넌트 - by sineTlsl */
const MyRecentList: React.FC<MyContentListProps> = ({ mode }): JSX.Element => {
  const [recentData, setRecentData] = useState<RecentListItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const selectedApi = RecentApiMapping[mode as MyContentMode];

      if (selectedApi) {
        try {
          const res = await selectedApi();

          console.log(res);
          setRecentData(res);
        } catch (err) {
          console.log(err);
        }
      }
    };

    fetchData();
  }, [mode]);

  console.log(recentData);

  return (
    <RecentListContainer>
      {recentData &&
        recentData.map((recent, idx) => (
          <li key={idx}>
            {/* <Link to={`/board/${recent.contentId}`}> */}
            <MyRecentItem recent={recent} />
            {/* </Link> */}
          </li>
        ))}
    </RecentListContainer>
  );
};

export default MyRecentList;

const RecentListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  height: 100%;
  gap: 4px;
  padding: 20px 0;

  > li {
    width: 100%;
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${props => props.theme.size.mobileL}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
