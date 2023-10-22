import { useState } from 'react';
import styled from 'styled-components';

// components
import MyReviewList from '@components/my-info/MyReviewList';
import MyRecentList from '@components/my-info//MyRecentList';

// icons
import { AiFillHeart } from 'react-icons/ai';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { MdRateReview } from 'react-icons/md';

// 콘텐츠 탭
const contentTabs = [
  { title: '브이로그', subTabs: ['스크랩', '기록', '리뷰'] },
  { title: '블로그', subTabs: ['스크랩', '기록', '리뷰'] },
];

export interface MyContentListProps {
  mode: string;
}

export type ReviewMode = '브이로그' | '블로그';

/** 2023/08/22 - 마이 페이지 콘텐츠 - by sineTlsl */
const MyInfoContent: React.FC = (): JSX.Element => {
  const [currentTabMode, setCurrentTabMode] = useState<number>(0);
  const [currentSubTabMode, setCurrentSubTabMode] = useState<number>(0);

  /** 2023/08/22 - Tab 모드 선택 - by sineTlsl */
  const handlerTabClick = (idx: number) => {
    setCurrentTabMode(idx);
    setCurrentSubTabMode(0);
  };

  /** 2023/08/22 - subTab 선택 - by sineTlsl */
  const handlerSubTabClick = (idx: number) => {
    setCurrentSubTabMode(idx);
  };

  return (
    <MyInfoContentContainer>
      <ContentTabWrap>
        {contentTabs.map((tab, idx) => (
          <ContentTabItems key={idx} $active={currentTabMode === idx} onClick={() => handlerTabClick(idx)}>
            {tab.title}
          </ContentTabItems>
        ))}
      </ContentTabWrap>
      <ContentTabWrap>
        {contentTabs[currentTabMode].subTabs.map((subTab, idx) => (
          <SubContentTabItems key={idx} $active={currentSubTabMode === idx} onClick={() => handlerSubTabClick(idx)}>
            {subTab === '스크랩' && <AiFillHeart size="18px" color="#ff5050" />}
            {subTab === '기록' && <FaClockRotateLeft size="18px" color="#ffa24d" />}
            {subTab === '리뷰' && <MdRateReview size="20px" color="#699BF7" />}
            {subTab}
          </SubContentTabItems>
        ))}
      </ContentTabWrap>
      {currentSubTabMode === 1 && <MyRecentList mode={contentTabs[currentTabMode].title} />}
      {currentSubTabMode === 2 && <MyReviewList mode={contentTabs[currentTabMode].title} />}
    </MyInfoContentContainer>
  );
};

export default MyInfoContent;

const MyInfoContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex-grow: 1;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    padding: 5px 20px 20px 20px;
  }
`;

// ===================== 콘텐츠 Vlog or Blog 탭 =====================
const ContentTabWrap = styled.ul`
  ${({ theme }) => theme.common.flexCenterRow};
  width: 100%;
  border-bottom: 1px solid var(--gray-primary);
  gap: 20px;
`;

// ===================== 콘텐츠 Vlog or Blog 탭 =====================
const ContentTabItems = styled.li<{ $active: boolean }>`
  ${({ theme }) => theme.common.flexCenterRow};
  cursor: pointer;
  letter-spacing: 0.5px;
  font-size: 17px;
  height: 45px;
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  color: ${({ $active }) => ($active ? 'var(--black-hunt)' : 'var(--gray-dark)')};
  position: relative;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    font-size: 15px;
  }

  ${({ $active }) =>
    $active &&
    `
    &::after {
      content: '';
      position: absolute;
      bottom: 0; /* 아래쪽 위치 조정 */
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 6px solid transparent; /* 꼬리의 왼쪽 부분 */
      border-right: 6px solid transparent; /* 꼬리의 오른쪽 부분 */
      border-bottom: 6px solid var(--gray-dark); /* 꼬리의 상단 부분 */
  `}

  &:hover {
    color: var(--black-light);
  }
`;

// ===================== 서브 콘텐츠 탭 =====================
const SubContentTabItems = styled.li<{ $active: boolean }>`
  ${({ theme }) => theme.common.flexCenterRow};
  gap: 5px;
  cursor: pointer;
  height: 45px;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: ${({ $active }) => ($active ? 'var(--black-hunt)' : 'var(--gray-dark)')};
  border-bottom: ${({ $active }) => ($active ? '2px solid var(--black-light)' : 'none')};

  @media ${props => props.theme.breakpoints.mobileSMax} {
    font-size: 15px;
    height: 40px;
  }
`;
