import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CategoryList from './CategoryList';


/** 2023/08/18 - 헤더 왼쪽 컴포넌트 (메뉴바, 로고) - by sineTlsl */
const LeftHeader = () => {
  const navigate = useNavigate();

  /** 2023/08/18 - 로고 클릭 시 메인페이지로 이동 - by sineTlsl */
  const handlerGoMain = () => {
    navigate('/');
  };

  return (
    <LeftHeaderContainer>
      <CategoryList />
      <div className="logo_wrap">
        <button onClick={handlerGoMain}>
          <img src="/assets/images/vblog_logo.png" />
        </button>
      </div>
    </LeftHeaderContainer>
  );
};

export default LeftHeader;

// left 헤더 컨테이너
const LeftHeaderContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterRow};
  flex: 0 1 1;
  height: 100%;

  > .logo_wrap {
    position: relative;
    width: 170px;
    height: 65px;

    > button {
      border: none;
      background: none;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
    > button > img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }

    @media ${props => props.theme.breakpoints.mobileSMax} {
      width: 120px;
      height: 50px;
    }
  }
`;
