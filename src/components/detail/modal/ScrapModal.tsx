import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

// icons
import { IoMdCloseCircle } from 'react-icons/io';
import { AiFillFolderAdd, AiOutlinePlus } from 'react-icons/ai';

// store
import { useContentModeStore } from '@store/useConentModeStore';

// api
import { getScrapVlog, getScrapBlog, postScrapFolder, postScrap } from '@api/my-info';


interface ScrapModalProps {
  isOpen: boolean;
  onClose: () => void;
  contentId: number;
}

//**2023/10/24 스크랩 클릭 시 뜨는 모달 - by jh
const ScrapModal: React.FC<ScrapModalProps> = ({ isOpen, onClose, contentId }): JSX.Element | null => {
  const [showNewFolderContainer, setshowNewFolderContainer] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState('');
  const [newFolderName, setNewFolderName] = useState('');
  const [folderNames, setFolderNames] = useState<string[]>([]);
  const { mode } = useContentModeStore();
  // allscrapApi 변수 생성
  const AllScrapApi = mode === 'V' ? getScrapVlog : mode === 'B' ? getScrapBlog : null;
  // 폴더 생성 시 type 변수 생성
  const type = mode === 'V' ? 'vlog' : mode === 'B' ? 'blog' : '';

  //**2023/10/24 새 폴더 만들기 클릭 시 사용되는 함수 - by jh
  const handleNewFolderClick = () => {
    setshowNewFolderContainer((prev) => !prev);
  };

  //**2023/10/24 새 폴더 만들기 클릭 시 변하는 input - by jh
  const handleNewFolderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFolderName(e.target.value);
  };

  //**2023/10/24 input name 입력 후 만들기 버튼 클릭 시 새 폴더 저장 함수 - by jh
  const handleNewFolderMakeClick = async () => {
    //**2023/11/11 스크랩 새 폴더 만들기 api 서버 연결 - by jh
    await postScrapFolder(newFolderName, type); 
    alert('만들기가 완료되었습니다.');
    setNewFolderName('');
    setshowNewFolderContainer(false);
    setFolderNames(prev => [...prev, newFolderName]);
  };

  //**2023/10/24 저장하기 버튼 클릭 시 사용되는 함수 - by jh
  const handleSubmitButtonClick = async () => {
    const scrapResponse = await postScrap(selectedFolder, contentId);
    console.log(scrapResponse);
    alert('저장이 완료되었습니다.');
    // 모달 종료
    onClose();
  };

//   const handleSubmitButtonClick = async () => {
//   try {
//     const res = await postScrap(selectedFolder, contentId);

//     // Check for errors in the response
//     if (!res) {
//       // Handle the error, for example, display an error message
//       console.error("Error while saving:", res);
//       alert('저장에 실패했습니다.');
//     } else {
//       // If successful, you can access the data
//       console.log("Scrap response:", res);
//       alert('저장이 완료되었습니다.');
//     }
//   } catch (error) {
//     // Handle unexpected errors
//     console.error("Unexpected error while saving:", error);
//     alert('저장 중에 오류가 발생했습니다.');
//   }

//   // Close the modal regardless of success or failure
//   onClose();
// };

  //**2023/11/11 스크랩 폴더 조회 api 서버 연결 - by jh
  useEffect(() => {
    const getAllScrap = async () => {
        if (AllScrapApi) {
          const res = await AllScrapApi();
          if (Array.isArray(res)) {
            setFolderNames(res.map((board: any) => board.name));
          } 
        } 
    };
    if (isOpen) {
      getAllScrap();
    }
  }, [isOpen]);

  return (
    <div>
      {isOpen && (
      <ModalContainer onClick={onClose}>
        <ModalContent onClick={e => e.stopPropagation()}>
          <CloseBtn onClick={onClose}>
            <IoMdCloseCircle size="23px" color="var(--black-primary)" />
          </CloseBtn>
          <label> 컨텐츠 저장 </label>
          <ScrapMenu>
            {/* 브블로그 폴터 리스트 컨테이너 */}
            {folderNames.map((folderName, index) => (
              <li
                key={index}
                className={folderName === selectedFolder ? 'selected' : ''}
                onClick={() => setSelectedFolder(folderName)}
              >
                {folderName === selectedFolder && <AiOutlinePlus />} {folderName}
              </li>
            ))}

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
      )}
    </div>
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
