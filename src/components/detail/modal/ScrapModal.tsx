import styled from 'styled-components';
import React, { useState } from 'react';

// icons
import { IoMdCloseCircle } from 'react-icons/io';
import { AiFillFolderAdd, AiOutlinePlus } from 'react-icons/ai';

interface ScrapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

//**2023/10/24 스크랩 클릭 시 뜨는 모달 - by jh
const ScrapModal: React.FC<ScrapModalProps> = ({ isOpen, onClose }): JSX.Element | null => {
  const [showNewFolderContainer, setshowNewFolderContainer] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  if (!isOpen) {
    return null;
  }

  //**2023/10/24 새 폴더 만들기 클릭 시 사용되는 함수 - by jh
  const handleNewFolderClick = () => {
    setshowNewFolderContainer((prev) => !prev);
  };

  //**2023/10/24 새 폴더 만들기 클릭 시 변하는 input - by jh
  const handleNewFolderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFolderName(e.target.value);
  };

  //**2023/10/24 input name 입력 후 만들기 버튼 클릭 시 변하는 input - by jh
  const handleNewFolderMakeClick = () => {
  alert('만들기가 완료되었습니다.');
  setNewFolderName('');
  setshowNewFolderContainer(false);
};

  //**2023/10/24 저장하기 버튼 클릭 시 사용되는 함수 - by jh
  const handleSubmitButtonClick = () => {
    alert('저장이 완료되었습니다.');
    // 모달 종료
    onClose();
  };

  return (
    <ModalContainer onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>
          <IoMdCloseCircle size="23px" color="var(--black-primary)" />
        </CloseBtn>
        <label> 컨텐츠 저장 </label>
        <ScrapMenu>
          {/* 브블로그 폴터 리스트 컨테이너 */}
          <li>
            <AiOutlinePlus />
             모든 게시물
          </li>
          <li> 파리 </li>
          <li> 베트남 </li>

          {/* 새 폴더 만들기 컨테이너 */}
          <div className="NewFolder" onClick={handleNewFolderClick}>
            <AiFillFolderAdd />
            새 폴더 만들기
          </div>
          {showNewFolderContainer && (
            <>
              <input
              type="text"
              value={newFolderName}
              onChange={handleNewFolderNameChange}
              placeholder="폴더 이름을 입력하세요."
              />
              <button type="submit" onClick={handleNewFolderMakeClick}> 만들기 </button>
            </>
          )}
        </ScrapMenu>
        <Submitbutton type="submit" onClick={handleSubmitButtonClick}> 저장하기 </Submitbutton>
      </ModalContent>
    </ModalContainer>
  );
};

export default ScrapModal;

const ModalContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fff;
  padding: 30px 38px;
  border-radius: 5px;
  position: relative;
  line-height: 25px;
  font-size: 15px;
  color: var(--black-hunt);

  > label{
    font-weight: 500;
    text-align: center;
  }

  > .Submitbutton{
    width: fit-content;
    background: var(--black-light);
    color: var(--white-hunt);
    margin: 0;
    padding: 0 10px;
    border-radius: 5px;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
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
  cursor: pointer;
`;

const ScrapMenu = styled.div`
  padding: 1rem 2rem;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  margin: 0.5rem 0;

  > .NewFolder {
    ${({ theme }) => theme.common.flexCenter};
    flex-direction: row;
    gap: 0.3rem;
    cursor: pointer;
    font-size: 15px;
    height: 25px;
    font-weight: 500;
    color: var(--black-hunt);
    padding: 0;
    margin-top: 2rem;
  }

  > input {
    border: none;
    border-bottom: 1px solid #000; 
    font-size: 14px;
    margin: 0.5rem 0;
    width: 100%;
  }

  > button {
    margin-left: auto;
    background: #fff;
    font-size: 14px;
    border: none;
  }


  > li {
    ${({ theme }) => theme.common.flexCenter};
    flex-direction: row;
    gap: 0.3rem;
    cursor: pointer;
    font-size: 15px;
    height: 25px;
    color: var(--black-hunt);
    padding: 0;
    margin: 0;
  }

  > li input[type="checkbox"] {
    margin-right: 8px; /* Add some spacing between checkbox and text */
  }
`;

// 스크랩 저장하기 버튼
const Submitbutton = styled.button`
    width: fit-content;
    background: var(--black-hunt);
    color: var(--white-hunt);
    margin: 0;
    padding: 3px 10px;
    border-radius: 5px;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
`;
