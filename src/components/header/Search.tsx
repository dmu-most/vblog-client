import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// type
import { getSearchVlog, getSearchBlog, getTrendTagBlog, getTrendTagVlog } from '@api/post';
import { SearchListRequestType, SearchListType } from 'types/index';

// store
import { useContentModeStore } from '@store/useConentModeStore';

// icon
import { HiOutlineSearch } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

type ContentMode = 'V' | 'B';

const searchApiMapping: Record<ContentMode, (params: SearchListRequestType) => Promise<SearchListType[]>> = {
  V: getSearchVlog,
  B: getSearchBlog,
};

const tagTrendMapping: Record<ContentMode, () => Promise<string[]>> = {
  V: getTrendTagVlog,
  B: getTrendTagBlog,
};

/** 2023/11/08 - 검색 컴포넌트 - by sineTlsl */
const Search: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const navigate = useNavigate();
  const { mode } = useContentModeStore();

  useEffect(() => {
    const tagTrendFetch = async () => {
      const selectedApi = tagTrendMapping[mode as ContentMode];

      if (selectedApi) {
        const res = await selectedApi();
        try {
          setTags(res);
        } catch (err) {
          console.error(err);
        }
      }
    };
    tagTrendFetch();
  }, [isOpen]);

  // useEffect(() => {
  //   const searchFetch = async () => {
  //     const selectedApi = searchApiMapping[mode as ContentMode];

  //     if (selectedApi && keyword.length >= 2) {
  //       const params: SearchListRequestType = {
  //         keyword,
  //       };
  //       const res = await selectedApi(params);

  //       try {
  //         console.log('res >> ', res);
  //       } catch (err) {
  //         console.error(err);
  //       }
  //     }
  //   };
  //   searchFetch();
  // }, [keyword]);

  /** 2023/11/08 - 로고 클릭 이벤트 핸들러 - by sineTlsl */
  const handlerLogoClick = () => {
    handlerSearchClick();
    navigate('/');
  };

  /** 2023/11/08 - 검색 버튼 이벤트 핸들러 - by sineTlsl */
  const handlerSearchClick = () => {
    setIsOpen(!isOpen);
  };

  const handlerKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <SearchButton onClick={handlerSearchClick}>
        <StyledSearch color="var(--gray-dark)" />
      </SearchButton>
      <FullWidthSearchContainer isOpen={isOpen}>
        <SearchHeader>
          <div className="logo_wrap">
            <button onClick={handlerLogoClick}>
              <img src="/assets/images/vblog_logo.png" />
            </button>
          </div>
          <button onClick={handlerSearchClick}>
            <IoClose size="30px" color="var(--black-light)" />
          </button>
        </SearchHeader>
        <SearchContent>
          <div className="desc_wrap">
            <h2>Search For Tag</h2>
            <p>{`해쉬태그와 관련된 게시물들이 검색됩니다 :(`}</p>
          </div>
          <SearchInputWrap>
            <SearchInput type="text" placeholder="# 세계여행" value={keyword} onChange={handlerKeywordChange} />
            <SearchIcon />
          </SearchInputWrap>
          <div className="tag_wrap">
            <div className="list_content">
              <span>TREND</span>
              <strong>#TAG</strong>
            </div>
            {tags && (
              <>
                <TrendWebTags>
                  {tags.slice(0, 4).map((tag, idx) => (
                    <Tag key={idx}># {tag}</Tag>
                  ))}
                </TrendWebTags>
                <TrendMobileTags>
                  {tags.slice(0, 2).map((tag, idx) => (
                    <Tag key={idx}># {tag}</Tag>
                  ))}
                </TrendMobileTags>
              </>
            )}
          </div>
        </SearchContent>
      </FullWidthSearchContainer>
    </>
  );
};

export default Search;

const SearchButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
`;

// Search 아이콘
const StyledSearch = styled(HiOutlineSearch)`
  font-size: 30px;

  @media ${props => props.theme.breakpoints.mobileSMax} {
    font-size: 24px;
  }
`;

const FullWidthSearchContainer = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 22px 60px 20px 60px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12px);
  z-index: 1000;

  @media ${props => props.theme.breakpoints.mobileLMax} {
    margin: 0;
    padding: 0 0 20px 0;
  }
`;

const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px 0 0;

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  > .logo_wrap {
    position: relative;
    width: 170px;
    height: 65px;

    > button {
      width: 100%;
      height: 100%;
    }
    > button > img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
  @media ${props => props.theme.breakpoints.mobileSMax} {
    padding: 8px;
    justify-content: flex-end;

    > .logo_wrap {
      display: none;
    }
  }
`;

const SearchContent = styled.div`
  padding: 20px;
  height: 100%;
  width: 100%;
  ${({ theme }) => theme.common.flexCol};
  gap: 20px;

  > .desc_wrap {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  > .desc_wrap > h2 {
    font-size: 28px;
    font-weight: 700;
    font-style: normal;
    text-decoration: none;
    text-align: center;
    color: var(--black-hunt);
  }

  > .desc_wrap > p {
    color: var(--black-light);
    font-size: 12px;
  }

  > .tag_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  > .tag_wrap > .list_content {
    color: var(--black-hunt);
    display: flex;
    gap: 5px;
  }
  > .tag_wrap > .list_content > span {
    font-weight: 200;
  }
  > .tag_wrap > .list_content > strong {
    font-weight: 600;
  }

  @media ${props => props.theme.breakpoints.mobileSMax} {
    > h2 {
      font-size: 25px;
    }
  }
`;

const SearchInputWrap = styled.div`
  max-width: 820px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 35px 10px 10px;
  font-weight: 500;
  border: none;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: var(--black-hunt);
  outline: none;

  &::placeholder {
    font-size: 14px;
  }
  &:hover,
  &:focus {
    border: none;
    outline: none;
  }

  @media ${props => props.theme.breakpoints.mobileLMax} {
    padding: 8px 35px 8px 10px;
  }
`;

const SearchIcon = styled(HiOutlineSearch)`
  position: absolute;
  right: 10px;
  color: var(--gray-dark);
`;

const TrendWebTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  @media ${props => props.theme.breakpoints.mobileLMax} {
    display: none;
  }
`;

const TrendMobileTags = styled.div`
  display: none;

  @media ${props => props.theme.breakpoints.mobileLMax} {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
`;

const Tag = styled.span`
  display: inline-block;
  color: var(--black-hunt);
  background-color: #eee;
  padding: 6px 10px;
  border-radius: 15px;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background-color: #ddd;
  }
`;
