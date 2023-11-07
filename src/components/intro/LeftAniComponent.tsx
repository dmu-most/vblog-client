import styled from 'styled-components';

/** 2023/11/07 - 애니메이션이 왼쪽에 있는 인트로 컴포넌트 - by jh */
const LeftAniComponent : React.FC = (): JSX.Element => {
  return (
    <IntroContainer> 
      <IntroAnimation />
      <IntroContent>
        인트롱~~~~
      </IntroContent>
    </IntroContainer>
  );
};

export default LeftAniComponent;

const IntroContainer = styled.div`
  display: flex;
  width: auto;
  height: 450px;
  margin: 3rem 2rem;
  padding: 2rem;
`;

const IntroAnimation = styled.div`
  background-color: yellow;
  ${({ theme }) => theme.common.flexCenter};
  flex: 1;
`;

const IntroContent = styled.div`
  background-color: pink;
  ${({ theme }) => theme.common.flexCenter};
  flex: 1;
`;