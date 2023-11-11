import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

// type
import { SearchListType } from 'types/index';

// components
import UndefinedData from '@components/common/UndefinedData';
import PostCard from '@components/common/PostCard';

/** 2023/11/11 - 검색 결과 리스트 페이지 - by sineTlsl */
const SearchPostsPage: React.FC = (): JSX.Element => {
  const location = useLocation();
  const { searchList, searchTag } = location.state as { searchList: SearchListType[]; searchTag: string };

  return (
    <SearchPostsContainer>
      <TagSearchWrap>
        <span>{searchTag}</span> 검색 결과
      </TagSearchWrap>
      {searchList.length > 0 ? (
        <PostsListUl>
          {searchList.map(post => (
            <li key={post.contentId}>
              <Link to={`/board/${post.contentId}`}>
                <PostCard data={post} />
              </Link>
            </li>
          ))}
        </PostsListUl>
      ) : (
        <UndefinedData text={`검색 결과가 없습니다. 다른 게시글을 검색해볼까요? :)`} />
      )}
    </SearchPostsContainer>
  );
};

export default SearchPostsPage;

const SearchPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
`;

const TagSearchWrap = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  color: var(--black-hunt);
  font-size: 25px;
  font-weight: 600;

  > span {
    color: var(--green-hunt);
    font-size: 30px;
    font-weight: 700;
    margin-right: 5px;
  }

  @media ${props => props.theme.breakpoints.mobileLMax} {
    font-size: 18px;

    > span {
      font-size: 22px;
    }
  }
`;

const PostsListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  gap: 10px;
  padding: 30px 0px;
  margin: 0 auto;

  > li {
    width: 100%;
  }
  @media screen and (max-width: 1350px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 970px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${props => props.theme.breakpoints.mobileLMax} {
    grid-template-columns: repeat(1, 1fr);
    padding: 20px 0;
    width: 100%;
  }
`;
