import styled from 'styled-components';
import { useContentModeStore } from '@store/useConentModeStore';

// icon
import { HiOutlineSearch } from 'react-icons/hi';
import { BiSolidDownArrow } from 'react-icons/bi';

type ContentMode = 'V' | 'B';

/** 2023/08/18 - 헤더 오른쪽 컴포넌트 (비로그인 or 로그인) - by sineTlsl */
const RightHeader = () => {
  const { mode, setMode } = useContentModeStore();

  /** 2023/08/18 - Vlog or Blog 전환하는 함수 - by sineTlsl */
  const handleContentMode = () => {
    const newMode = mode === 'V' ? 'B' : 'V';

    setMode(newMode);
  };

  return (
    <RightHeaderContainer>
      <div className="btn_wrap">
        <StyledSearch color="var(--gray-dark)" />
        <VblogChangeBtn mode={mode} onClick={handleContentMode}>
          {mode}
        </VblogChangeBtn>
      </div>
      <div className="gap" />
      <div className="profile-wrap">
        <ProfileImg />
        <BiSolidDownArrow size="10px" color="var(--gray-dark)" />
      </div>
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
  > .profile-wrap {
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
  cursor: pointer;
  ${({ theme }) => theme.common.flexCenterRow};

  @media ${props => props.theme.breakpoints.mobileSMax} {
    width: 27px;
    height: 27px;
    font-size: 15px;
  }
`;

// Profile 유저 이미지
const ProfileImg = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: var(--gray-primary);

  @media ${props => props.theme.breakpoints.mobileSMax} {
    width: 30px;
    height: 30px;
  }
`;
