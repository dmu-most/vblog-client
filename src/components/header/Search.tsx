import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// type
import { SearchListRequestType, SearchListType } from 'types/index';

// api
import {
  getTagSearchVlog,
  getTagSearchBlog,
  getSearchVlog,
  getSearchBlog,
  getTrendTagBlog,
  getTrendTagVlog,
} from '@api/post';

// store
import { useContentModeStore } from '@store/useConentModeStore';

// util
import { removeTagText } from '@utils/truncatedText';

// icon
import { HiOutlineSearch } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

type ContentMode = 'V' | 'B';

const tagSearchMapping: Record<ContentMode, (params: SearchListRequestType) => Promise<string[]>> = {
  V: getTagSearchVlog,
  B: getTagSearchBlog,
};

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
  const [autocompleteResults, setAutocompleteResults] = useState<string[]>([]);
  const [selectedIdx, setSelectedIdx] = useState<number>(-1);

  const navigate = useNavigate();
  const { mode } = useContentModeStore();

  useEffect(() => {
    tagTrendFetch();
    setSelectedIdx(-1);
    setKeyword('');
    setAutocompleteResults([]);
  }, [isOpen]);

  useEffect(() => {
    if (keyword) {
      tagSearchFetch();
    }
  }, [keyword]);

  useEffect(() => {
    if (selectedIdx !== -1 && autocompleteResults.length > 0) {
      const resultItem = document.querySelector(`#autocompleteItem${selectedIdx}`);

      if (resultItem) {
        resultItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIdx, autocompleteResults]);

  /** 2023/11/08 - 브이로그/블로그 인기 해쉬태그 불러오기 - by sineTlsl */
  const tagTrendFetch = async () => {
    const selectedApi = tagTrendMapping[mode as ContentMode];

    if (selectedApi) {
      const res = await selectedApi();

      try {
        setTags(res);
        console.log(res);
      } catch (err) {
        console.error(err);
      }
    }
  };

  /** 2023/11/09 - 브이로그/블로그 해쉬태그 키워드 검색 - by sineTlsl */
  const tagSearchFetch = async () => {
    const selectedApi = tagSearchMapping[mode as ContentMode];

    if (selectedApi && keyword.length >= 2) {
      const params: SearchListRequestType = {
        keyword,
      };
      const res = await selectedApi(params);

      try {
        setAutocompleteResults(res);

        if (keyword === res[0]) {
          setAutocompleteResults([]);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  /** 2023/11/08 - 로고 클릭 이벤트 핸들러 - by sineTlsl */
  const handlerLogoClick = () => {
    handlerSearchClick();
    navigate('/');
  };

  /** 2023/11/08 - 검색 버튼 이벤트 핸들러 - by sineTlsl */
  const handlerSearchClick = () => {
    setIsOpen(!isOpen);
  };

  /** 2023/11/09 - 해쉬태그 input 이벤트 - by sineTlsl */
  const handlerKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(removeTagText(e.target.value));
  };

  /** 2023/11/09 - 인기 trend 태그 클릭 시, 검색 - by sineTlsl */
  const handlerTagClick = (tag: string) => {
    setKeyword(removeTagText(tag));
  };

  /** 2023/11/09 - 검색 버튼 이벤트 리스너 - by sineTlsl */
  const handlerSearchBtnClick = async () => {
    const selectedApi = searchApiMapping[mode as ContentMode];

    if (selectedApi && keyword.length >= 2) {
      const params: SearchListRequestType = {
        keyword,
      };
      const res = await selectedApi(params);

      try {
        console.log(res);

        navigate(`/search?s=${encodeURIComponent(keyword)}`, { state: { searchList: res, searchTag: keyword } });
        setIsOpen(!isOpen);
      } catch (err) {
        console.error(err);
      }
    }
  };

  /** 2023/11/10 - 키보드로 자동 완성 키워드 움직이기 - by sineTlsl */
  const handlerKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown' && autocompleteResults.length - 1 > selectedIdx) {
      setSelectedIdx(selectedIdx + 1);
    }
    // 무조건 0 이상
    if (selectedIdx >= 0) {
      if (e.key === 'ArrowUp') {
        setSelectedIdx(selectedIdx - 1);
      }
      if (e.key === 'Enter') {
        setKeyword(autocompleteResults[selectedIdx]);
        setAutocompleteResults([]);
        setSelectedIdx(-1);
        handlerSearchBtnClick();
      }
    }
  };

  return (
    <>
      <SearchButton onClick={handlerSearchClick}>
        <StyledSearch color="var(--gray-dark)" />
      </SearchButton>
      <FullWidthSearchContainer $isOpen={isOpen}>
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
            <p>
              {mode === 'V' ? '해쉬태그와 관련된 브이로그가 검색됩니다 :)' : '해쉬태그와 관련된 블로그가 검색됩니다 :)'}
            </p>
          </div>
          <SearchInputWrap>
            <SearchInput
              type="text"
              placeholder="#세계여행"
              value={keyword}
              onChange={handlerKeywordChange}
              onKeyUp={handlerKeyUp}
            />
            <button type="submit" className="search_btn" onClick={handlerSearchBtnClick}>
              <SearchIcon />
            </button>
            {autocompleteResults.length > 0 && (
              <AutocompleteResults>
                {autocompleteResults.map((result, index) => (
                  <AutocompleteItem
                    id={`autocompleteItem${index}`}
                    key={index}
                    $isSelected={selectedIdx === index}
                    onClick={() => {
                      setKeyword(result);
                      setAutocompleteResults([]);
                    }}>
                    {result}
                  </AutocompleteItem>
                ))}
              </AutocompleteResults>
            )}
          </SearchInputWrap>

          {autocompleteResults.length <= 0 && (
            <div className="tag_wrap">
              <div className="list_content">
                <span>TREND</span>
                <strong>#TAG</strong>
              </div>
              {tags && (
                <>
                  <TrendWebTags>
                    {tags.slice(0, 4).map((tag, idx) => (
                      <SearchButton key={idx} onClick={() => handlerTagClick(tag)}>
                        <Tag>#{tag}</Tag>
                      </SearchButton>
                    ))}
                  </TrendWebTags>
                  <TrendMobileTags>
                    {tags.slice(0, 2).map((tag, idx) => (
                      <SearchButton key={idx} onClick={() => handlerTagClick(tag)}>
                        <Tag>#{tag}</Tag>
                      </SearchButton>
                    ))}
                  </TrendMobileTags>
                </>
              )}
            </div>
          )}
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

const FullWidthSearchContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 22px 60px 20px 60px;
  min-height: 260px;
  height: auto;
  max-height: 80vh;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12px);
  z-index: 1000;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-100vh)')};
  transition:
    transform 0.5s ease-in-out,
    visibility 0s,
    opacity 0.3s linear;
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};

  @media ${props => props.theme.breakpoints.mobileLMax} {
    background: rgba(255, 255, 255, 0.9);
    padding: 0 0 10px 0;
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
  position: relative;
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

  button {
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    cursor: pointer;
  }
  > .search_btn {
    position: absolute;
    right: 10px;
  }
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
  margin-bottom: 3px;

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
  color: var(--gray-dark);
  font-size: 20px;
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
  background: var(--gray-light);
  padding: 6px 10px;
  border-radius: 15px;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background: #ddd;
  }
`;

const AutocompleteResults = styled.ul`
  position: absolute;
  top: 100%;
  height: auto;
  left: 0;
  right: 0;
  z-index: 1;
  max-height: 200px;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 0 0 10px 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin: 0;
  padding: 0;
`;

const AutocompleteItem = styled.li<{ $isSelected: boolean }>`
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
  color: var(--black-light);
  background-color: ${({ $isSelected }) => ($isSelected ? 'var(--gray-light)' : 'transparent')};

  &:hover {
    background: var(--gray-light);
    font-weight: 500;
  }

  @media ${props => props.theme.breakpoints.mobileLMax} {
    font-size: 13px;
  }
`;
