import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

//  components
import ProfileDescription from '@components/my-info/ProfileDescription';
import MyInfoContent from '@components/my-info/MyInfoContent';

/** 2023/08/21 - 마이 페이지 - by sineTlsl */
const MyPage: React.FC = (): JSX.Element => {
  const location = useLocation();
  const isCategory = location.state?.isCategory || false;

  return (
    <MyPageContainer>
      <ProfileDescription isCategory={isCategory} />
      <MyInfoContent />
    </MyPageContainer>
  );
};

export default MyPage;

const MyPageContainer = styled.section`
  ${({ theme }) => theme.common.flexCol};
  height: 100%;
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
`;
