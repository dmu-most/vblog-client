import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


/** 2023/11/07 - 애니메이션이 왼쪽에 있는 인트로 컴포넌트 - by jh */
const HomeButton : React.FC  = (): JSX.Element => {
    const navigate = useNavigate();

    /** 2023/11/07 - 로고 클릭 시 메인페이지로 이동 - by jh */
    const handlerGoMain = () => {
    navigate('/');
  };

  return (
    <HomebuttonContainer onClick={handlerGoMain}>
      <img src="assets/images/vblog_logo.png" alt="banner Image" />
      <label>지금 바로 이용해보세요.</label>
    </HomebuttonContainer>
  );
};

export default HomeButton;

const HomebuttonContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterCol};
  margin: 2rem;
  padding: 2rem;
  cursor: pointer;

  > img {
    width: 500px;

    @media ${props => props.theme.breakpoints.tabletMax} {
    width: 350px;
    }
  }
  > label {

    @media ${props => props.theme.breakpoints.tabletMax} {
    font-size: 1rem;
    }

    @media ${props => props.theme.breakpoints.mobileLMax} {
    font-size: 0.9rem;
    }

    @media ${props => props.theme.breakpoints.mobileSMax} {
    font-size: 0.8rem;
    }
  }
`;