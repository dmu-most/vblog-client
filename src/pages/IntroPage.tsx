import styled from 'styled-components';

//component
import LeftAniComponent from '@components/intro/LeftAniComponent';
import RightAniComponent from '@components/intro/RightAniComponent';

/** 2023/11/07 - 인트로 페이지 - by jh */
const IntroPage: React.FC = (): JSX.Element => {
  return (
    <IntroContainer>
      <LeftAniComponent />
      <RightAniComponent />
      <LeftAniComponent />
    </IntroContainer>
  );
};

export default IntroPage;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
