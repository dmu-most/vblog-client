import styled from 'styled-components';

//  components
import ProfileDescription from '@components/my-info/ProfileDescription';
import MyInfoContent from '@components/my-info/MyInfoContent';

/** 2023/08/21 - 마이 페이지 - by sineTlsl */
const MyPage: React.FC = (): JSX.Element => {
  return (
    <MyPageContainer>
      <ProfileDescription />
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
