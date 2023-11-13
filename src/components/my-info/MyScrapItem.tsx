import styled from 'styled-components';
import { useState } from 'react';

// type
import { ScrapResponseType } from 'types/my-info';

// components
import ScrapFolderList from '@components/my-info/ScrapFolderList';
import UndefinedData from '@components/common/UndefinedData';

interface ScrapItemProps {
  scrap: ScrapResponseType;
}

/** 2023/11/12 - 스크랩 아이템 컴포넌트 - by sineTlsl */
const MyScrapItem: React.FC<ScrapItemProps> = ({ scrap }): JSX.Element => {
  const [isScrapFolderOpen, setIsScrapFolderOpen] = useState<boolean>(false);

  const handlerScrapOpenClick = () => {
    setIsScrapFolderOpen(!isScrapFolderOpen);
  };
  return (
    <MyScrapItemContainer>
      <div className="folder_name">
        <p>{scrap.name}</p>
      </div>
      {scrap.boards.length > 0 ? (
        scrap.boards.length >= 4 ? (
          <FolderUl>
            {scrap.boards.slice(0, 4).map(item => (
              <li key={item.id}>
                <button onClick={handlerScrapOpenClick}>
                  <img src={item.thumbnails} alt="스크랩 폴더 안 포스트 이미지" />
                </button>
              </li>
            ))}
          </FolderUl>
        ) : (
          <FolderUl>
            {scrap.boards.map(item => (
              <li key={item.id}>
                <button onClick={handlerScrapOpenClick}>
                  <img src={item.thumbnails} alt="스크랩 폴더 안 포스트 이미지" />
                </button>
              </li>
            ))}
          </FolderUl>
        )
      ) : (
        <UndefinedData text="스크랩된 아이템이 없습니다 :(" />
      )}
      {isScrapFolderOpen && (
        <ScrapFolderList isOpen={isScrapFolderOpen} onClose={() => setIsScrapFolderOpen(false)} scrap={scrap} />
      )}
    </MyScrapItemContainer>
  );
};

export default MyScrapItem;

const MyScrapItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: var(--black-hunt);
  gap: 10px;

  > .folder_name > p {
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    text-align: left;
  }

  button {
    padding: 0;
    margin: 0;
    background: none;
    border: none;
    cursor: pointer;
  }

  @media ${props => props.theme.breakpoints.mobileLMax} {
    > .folder_name > p {
      font-size: 16px;
    }
  }
`;

const FolderUl = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  padding: 0px;

  > li > button {
    width: 100%;
    background-color: rgba(35, 35, 35, 0.3);
    border-radius: 8px;
  }
  > li > button > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  > li:first-child > button > img {
    border-top-left-radius: 8px;
  }
  > li:nth-child(2) > button > img {
    border-top-right-radius: 8px;
  }
  > li:nth-child(3) > button > img {
    border-bottom-left-radius: 8px;
  }
  > li:nth-child(4) > button > img {
    border-bottom-right-radius: 8px;
  }
`;

const FolderUlLengthOne = styled.ul`
  width: 100%;
  gap: 5px;
  padding: 0px;

  > li > button {
    width: 100%;
    background-color: rgba(35, 35, 35, 0.3);
    border-radius: 8px;
  }
  > li > button > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;
