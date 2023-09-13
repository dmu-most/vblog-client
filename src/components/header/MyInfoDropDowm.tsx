import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// stores
import { useTokenStore } from '@store/useTokenStore';
import { useMemberStore } from '@store/useMemberStore';

interface DropDownProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

/** 2023/09/13 - 헤더 회원정보 드롭다운 - by sineTlsl */
const MyInfoDropDown: React.FC<DropDownProps> = ({ isOpen, setIsOpen }): JSX.Element => {
  const navigate = useNavigate();
  const { clearTokens } = useTokenStore();
  const { clearMember } = useMemberStore();

  /** 2023/09/13 - 로그아웃 - by sineTlsl */
  const handlerLogout = () => {
    clearTokens();
    clearMember();
    navigate('/');
  };

  return (
    <DropDownContainer>
      <UlMenu $isOpen={isOpen}>
        <li>
          <Link to="myinfo">마이페이지</Link>
        </li>
        <li>
          <Link to="myinfo">회원정보</Link>
        </li>
        <li>
          <Link to="myinfo">설정</Link>
        </li>
        <li>
          <button onClick={handlerLogout}>로그아웃</button>
        </li>
      </UlMenu>
    </DropDownContainer>
  );
};

export default MyInfoDropDown;

const DropDownContainer = styled.div`
  overflow: auto;
  z-index: 20;
  display: flex;
  justify-content: flex-end;
`;

const UlMenu = styled.ul<{ $isOpen: boolean }>`
  ${({ theme }) => theme.common.flexCenterCol};
  background: var(--white-primary);
  border-radius: 8px;
  position: absolute;
  top: 58px;
  width: 120px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-20px)')};
  transition:
    opacity 0.4s ease,
    transform 0.4s ease,
    visibility 0.4s;
  padding: 10px 0;

  > li {
    ${({ theme }) => theme.common.flexCenter};
    cursor: pointer;
    font-size: 15px;
    height: 25px;
    color: var(--black-hunt);
    width: 90%;
    padding: 0;
    margin: 0;

    &:hover {
      border-radius: 8px;
      background: var(--green-hunt);
      color: var(--white-primary);
    }
  }
  > li > button {
    cursor: pointer;
    border: none;
    background: none;
    font-size: 15px;
    height: 100%;
    color: var(--black-hunt);
    width: 100%;

    &:hover {
      border-radius: 8px;
      background: var(--green-hunt);
      color: var(--white-primary);
    }
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    top: 45px;
    width: 100px;

    > li {
      font-size: 14px;
      height: 23px;
    }
    > li > button {
      font-size: 14px;
    }
  }
`;
