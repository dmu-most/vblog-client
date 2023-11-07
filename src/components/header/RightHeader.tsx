import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';

// store
import { useContentModeStore } from '@store/useConentModeStore';
import { useTokenStore } from '@store/useTokenStore';
import { useMemberStore } from '@store/useMemberStore';

// components
import UserLoginBtn from '@components/header/UserLoginBtn';
import MyInfoDropDown from '@components/header/MyInfoDropDown';

// icon
import { HiOutlineSearch } from 'react-icons/hi';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

type ContentMode = 'V' | 'B';

/** 2023/08/18 - 헤더 오른쪽 컴포넌트 (비로그인 or 로그인) - by sineTlsl */
const RightHeader = () => {
  const { accessToken, refreshToken } = useTokenStore();
  const { mode, setMode } = useContentModeStore();
  const { member } = useMemberStore();
  const dropDownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  /** 2023/08/18 - Vlog or Blog 전환하는 함수 - by sineTlsl */
  const handleContentMode = () => {
    const newMode = mode === 'V' ? 'B' : 'V';

    setMode(newMode);
  };

  useEffect(() => {
    //
    const handleClickOutside = (e: MouseEvent) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      setTimeout(() => {
        window.addEventListener('click', handleClickOutside);
      }, 0);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <RightHeaderContainer>
      <div className="btn_wrap">
        <StyledSearch color="var(--gray-dark)" />
        <VblogChangeBtn mode={mode} onClick={handleContentMode}>
          {mode}
        </VblogChangeBtn>
      </div>
      <div className="gap" />
      {accessToken && refreshToken ? (
        <div className="profile_wrap">
          <ProfileImgWrap>
            <img src={member && member.imageUrl ? member.imageUrl : '/assets/images/avator_default.png'} />
          </ProfileImgWrap>
          <UserDropDown ref={dropDownRef}>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <TiArrowSortedUp size="20px" color="var(--gray-dark)" />
              ) : (
                <TiArrowSortedDown size="20px" color="var(--gray-dark)" />
              )}
            </button>
            {isOpen && <MyInfoDropDown isOpen={isOpen} setIsOpen={setIsOpen} />}
          </UserDropDown>
        </div>
      ) : (
        <UserLoginBtn />
      )}
    </RightHeaderContainer>
  );
};

export default RightHeader;

// Right 헤더 컨테이너
const RightHeaderContainer = styled.div`
  flex: 0 1 1;
  height: 100%;
  ${({ theme }) => theme.common.flexCenterRow};
  gap: 1rem;

  > .btn_wrap {
    ${({ theme }) => theme.common.flexCenter};
    gap: 0.7rem;
  }
  > .gap {
    width: 1px;
    height: 38px;
    background: var(--gray-primary);

    @media ${props => props.theme.breakpoints.mobileSMax} {
      height: 25px;
    }
  }
  > .profile_wrap {
    ${({ theme }) => theme.common.flexCenter};
    gap: 0.3rem;
  }
`;

// Search 아이콘
const StyledSearch = styled(HiOutlineSearch)`
  font-size: 30px;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    font-size: 20px;
  }
`;

// Vlog or Blog 전환 버튼
const VblogChangeBtn = styled.button<{ mode: ContentMode }>`
  width: 30px;
  height: 30px;
  background: ${({ mode }) => (mode === 'V' ? 'var(--green-hunt)' : 'var(--brown-hunt)')};
  border: none;
  border-radius: 3px;
  color: ${({ mode }) => (mode === 'V' ? 'var(--white-hunt)' : 'var(--black-hunt)')};
  letter-spacing: -0.16px;
  font-size: 20px;
  font-weight: 700;
  padding: 0;
  cursor: pointer;
  ${({ theme }) => theme.common.flexCenterRow};

  @media ${props => props.theme.breakpoints.mobileSMax} {
    width: 28px;
    height: 28px;
    font-size: 16px;
  }
`;

// Profile 유저 이미지
const ProfileImgWrap = styled.div`
  width: 35px;
  height: 35px;
  ${({ theme }) => theme.common.flexCenter};

  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    width: 30px;
    height: 30px;
  }
`;

// 유저 드롭다운
const UserDropDown = styled.div`
  user-select: none;
  padding: 2px;
  ${({ theme }) => theme.common.flexCenterRow};

  > button {
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
  }
`;
