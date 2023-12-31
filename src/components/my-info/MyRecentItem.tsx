import styled from 'styled-components';

// types
import { RecentContent } from 'types/my-info';

interface RecentItemProps {
  recent: RecentContent;
}

/** 2023/10/22 - 리뷰 최근기록 아이템 컴포넌트 - by sineTlsl */
const MyRecentItem: React.FC<RecentItemProps> = ({ recent }): JSX.Element => {
  /** 2023/10/25 - 이미지 에러 시 기본 이미지로 대체 - by sineTlsl */
  const handlerImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.src = '/assets/images/undefined2.png';
  };

  return (
    <RecentItemContainer>
      <ImageWrap>
        <img src={recent.thumbnails} onError={handlerImgError} alt="Vlog Image" />
      </ImageWrap>
      <TextWrap>
        <p className="desc">{recent.description}</p>
      </TextWrap>
    </RecentItemContainer>
  );
};

export default MyRecentItem;

const RecentItemContainer = styled.article`
  overflow: hidden;
  border-radius: 6px;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
`;

// ===================== 이미지 박스 =====================
const ImageWrap = styled.div`
  min-width: 280px;
  min-height: 150px;
  height: 150px;
  max-width: 100%;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 950px) {
    height: 200px;
  }
  @media ${props => props.theme.breakpoints.mobileLMax} {
    height: 250px;
  }
  @media ${props => props.theme.breakpoints.mobileSMax} {
    height: 200px;
  }
`;

// ===================== 텍스트 박스 =====================
const TextWrap = styled.div`
  width: 100%;
  height: 58px;
  color: var(--black-hunt);
  ${({ theme }) => theme.common.flexCol};

  > .desc {
    display: -webkit-box;
    text-align: center;
    font-size: 14px;
    padding: 3px 6px;
    line-height: 22px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media ${props => props.theme.breakpoints.mobileLMax} {
    height: auto;

    > .desc {
      font-size: 13px;
    }
  }
`;
