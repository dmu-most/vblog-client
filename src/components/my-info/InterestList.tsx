import { useState } from 'react';
import styled from 'styled-components';

const categories = ['여행', '게임', '건강', '맛집', '방송', '뷰티'];

/** 2023/10/24 - 카테고리 수정 컴포넌트 - by sineTlsl */
const InterestList: React.FC = (): JSX.Element => {
  const [interest, setInterest] = useState<string[]>([]);

  /** 2023/10/24 - 카테고리 선택 함수 - by sineTlsl */
  const handlerInterestClick = (item: string) => {
    if (interest.includes(item)) {
      setInterest(prev => prev.filter(selected => selected !== item));
    } else if (interest.length < 3) {
      setInterest(prev => [...prev, item]);
    }
  };

  return (
    <InterestListContainer>
      <p className="interest_text">* 카테고리는 최대 3개까지 선택 가능</p>
      <InterestListUl>
        {categories.map((category, idx) => (
          <li key={idx}>
            <button
              className={interest.includes(category) ? 'selected' : ''}
              onClick={() => handlerInterestClick(category)}>
              {category}
            </button>
          </li>
        ))}
      </InterestListUl>
    </InterestListContainer>
  );
};

export default InterestList;

const InterestListContainer = styled.div`
  padding-top: 10px;
  width: 100%;

  > .interest_text {
    font-size: 13px;
    color: #8d8d8d;
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    > .interest_text {
      font-size: 12px;
      line-height: 13px;
    }
  }
`;

const InterestListUl = styled.ul`
  ${({ theme }) => theme.common.flexCenterRow};
  flex-wrap: wrap;
  width: 100%;
  padding: 10px 0;
  gap: 5px;

  > li {
    flex: 1 1 calc(100% / 3 - 10px);
  }

  > li > button {
    /* width: calc(100% / 3); */
    width: 100%;
    height: 40px;
    margin: 0;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px 7px;
    background: none;
    color: #8c5626;
    font-size: 15px;
    font-weight: 600;
    border: 1px solid #8c5626;
  }

  > li > button.selected {
    color: #8c5626;
    background: #e3d3ba;
    font-weight: 700;
    border: 2px solid #8c5626;
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    > li > button {
      height: 36px;
      font-size: 14px;
    }
  }
`;
