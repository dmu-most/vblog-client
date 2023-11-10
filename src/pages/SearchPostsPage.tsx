import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

// type
import { SearchListType } from 'types/index';

const SearchPostsPage: React.FC = (): JSX.Element => {
  const location = useLocation();
  const { searchList, searchTag } = location.state as { searchList: SearchListType[]; searchTag: string };

  return (
    <SearchPostsContainer>
      <TagSearchWrap>
        <span>{searchTag}</span> 검색 결과
      </TagSearchWrap>
    </SearchPostsContainer>
  );
};

export default SearchPostsPage;

const SearchPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const TagSearchWrap = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  color: var(--black-hunt);
  font-size: 18px;
  font-weight: 600;

  > span {
    color: var(--green-hunt);
    font-size: 22px;
    font-weight: 700;
    margin-right: 5px;
  }
`;
