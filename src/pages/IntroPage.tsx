import styled from 'styled-components';

//component
import LeftAniComponent from '@components/intro/LeftAniComponent';
import RightAniComponent from '@components/intro/RightAniComponent';
import HomeButton from '@components/intro/HomeButton';

// json data
import lottie01Ani from '../components/intro/jsons/intro01Ani.json'
import lottie02Ani from '../components/intro/jsons/intro02Ani.json'
import lottie03Ani from '../components/intro/jsons/intro03Ani.json'
import lottie04Ani from '../components/intro/jsons/intro04Ani.json'

/** 2023/11/07 - 인트로 페이지 - by jh */
const IntroPage: React.FC = (): JSX.Element => {
  //애니메이션 받을 함수
  const leftAnimationData01 = lottie01Ani;
  const leftAnimationData02 = lottie02Ani;
  const leftAnimationData03 = lottie03Ani;
  const leftAnimationData04 = lottie04Ani;
  //content 받을 함수
  const leftContent01 = "매일 똑같은 알고리즘이 지겨우신가요?";
  const leftContent02 = "브이로그와 블로그를 따로보기 불편하셨나요?";
  const rightContent03 = "브블만의 리뷰와 평점,컨텐츠 추천을 만나보세요.";
  const rightContent04 = "버튼 하나로 브블만의 컨텐츠를 제공합니다.";

  return (
    <IntroContainer>
      <LeftAniComponent animationData={leftAnimationData01} content={leftContent01}/>
      <RightAniComponent animationData={leftAnimationData02} content={rightContent03}/>
      <LeftAniComponent animationData={leftAnimationData03} content={leftContent02}/>
      <RightAniComponent animationData={leftAnimationData04} content={rightContent04}/>
      <HomeButton />
    </IntroContainer>
  );
};

export default IntroPage;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
