import styled from 'styled-components';

// Lottie player 라이브러리
import Lottie from 'react-lottie-player'

interface AniComponentProps {
  animationData: any; //컨텐츠 애니메이션을 받을 prop
  content: string; // 컨텐츠 텍스트를 받을 prop
}


/** 2023/11/07 - 애니메이션이 왼쪽에 있는 인트로 컴포넌트 - by jh */
const LeftAniComponent : React.FC<AniComponentProps>  = ({animationData, content }): JSX.Element => {

  return (
    <IntroContainer> 
      <IntroAnimation>
        <Lottie
          loop
          animationData={animationData}
          play
          style={{ width: 500, height: 500 }}
      />
      </IntroAnimation>
      <IntroContent>
        <Content>
          <span className="typewriter">{content}</span>
        </Content>
      </IntroContent>
    </IntroContainer>
  );
};

export default LeftAniComponent;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: 450px;
  margin: 5rem 2rem;
  padding: 2rem;

  @media ${props => props.theme.breakpoints.tabletMax} {
    flex-direction: column;
    }
`;

const IntroAnimation = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex: 1;
`;

const IntroContent = styled.div`
  ${({ theme }) => theme.common.flexCenterCol};
  flex: 1;
  padding: 2rem;
`;

const Content = styled.div`
  width: auto;
  color: var(--black-hunt);
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.5;

  @media ${props => props.theme.breakpoints.tabletMax} {
    font-size: 1rem;
  }

  @media ${props => props.theme.breakpoints.mobileLMax} {
    font-size: 0.9rem;
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    font-size: 0.8rem;
  }
`;