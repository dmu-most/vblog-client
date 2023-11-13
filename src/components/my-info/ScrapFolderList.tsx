import styled from 'styled-components';
import { Link } from 'react-router-dom';

// type
import { ScrapResponseType } from 'types/my-info';

// icons
import { IoMdCloseCircle } from 'react-icons/io';

interface ScrapFolderProps {
  isOpen: boolean;
  scrap: ScrapResponseType;
  onClose: () => void;
}
/** 2023/11/12 - 스크랩 폴더 안 리스트 - by sineTlsl */
const ScrapFolderList: React.FC<ScrapFolderProps> = ({ isOpen, scrap, onClose }): JSX.Element | null => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer>
      <ScrapFolderListUl>
        <h2>{scrap.name} </h2>
        <CloseBtn onClick={onClose}>
          <IoMdCloseCircle size="23px" color="var(--black-primary)" />
        </CloseBtn>
        {scrap.boards.map(item => (
          <ScrapItem key={item.id}>
            <Link to={`/board/${item.id}`}>
              <img src={item.thumbnails} alt="스크랩 아이템 썸네일" />
              <Description>
                <h4 className="desc_title">{item.title}</h4>
                <p className="desc">{item.description}</p>
              </Description>
            </Link>
          </ScrapItem>
        ))}
      </ScrapFolderListUl>
    </ModalContainer>
  );
};

export default ScrapFolderList;

const ModalContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ScrapFolderListUl = styled.ul`
  background: var(--white-primary);
  padding: 30px 20px;
  border-radius: 10px;
  position: relative;
  color: var(--black-hunt);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  max-height: 80vh;
  width: 60%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  > h2 {
    font-size: 18px;
    font-weight: 600;
    color: var(--black-hunt);
    margin-bottom: 20px;
  }

  @media ${props => props.theme.breakpoints.desktopSMax} {
    width: 80%;
  }

  @media ${props => props.theme.breakpoints.tabletMax} {
    width: 90%;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  padding: 0;
  margin: 0;
  background: none;
`;

const ScrapItem = styled.li`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  > a {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    width: 100%;
  }

  > a > img {
    width: 200px;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
    margin-right: 10px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-overflow: ellipsis;
  gap: 7px;
  color: var(--black-hunt);

  > .desc_title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  }
  > .desc {
    display: -webkit-box;
    font-size: 14px;
    line-height: 16px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
